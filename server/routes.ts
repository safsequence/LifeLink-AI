import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { analyzeTriage, chatWithAI } from "./gemini";
import { insertUserSchema, insertHealthLogSchema, insertAlertSchema } from "@shared/schema";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(1),
});

const triageSchema = z.object({
  symptoms: z.string().min(1),
  userId: z.string(),
});

const chatSchema = z.object({
  message: z.string().min(1),
  userId: z.string(),
});

const alertSchema = z.object({
  userId: z.string(),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  urgency: z.number().min(1).max(10),
  description: z.string().optional(),
});

const updateAlertSchema = z.object({
  status: z.enum(["pending", "active", "resolved"]),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const data = signupSchema.parse(req.body);
      
      const existingUser = await storage.getUserByEmail(data.email);
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      const user = await storage.createUser({
        email: data.email,
        password: data.password,
        name: data.name,
        role: "patient",
      });

      const { password, ...userWithoutPassword } = user;
      res.json({ user: userWithoutPassword });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(400).json({ error: "Invalid request" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const data = loginSchema.parse(req.body);
      
      const user = await storage.getUserByEmail(data.email);
      if (!user || user.password !== data.password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const { password, ...userWithoutPassword } = user;
      res.json({ user: userWithoutPassword });
    } catch (error) {
      console.error("Login error:", error);
      res.status(400).json({ error: "Invalid request" });
    }
  });

  app.post("/api/triage", async (req, res) => {
    try {
      const data = triageSchema.parse(req.body);
      
      const triageResult = await analyzeTriage(data.symptoms);
      
      await storage.createAIChatLog({
        userId: data.userId,
        prompt: data.symptoms,
        response: triageResult,
      });

      res.json(triageResult);
    } catch (error) {
      console.error("Triage error:", error);
      res.status(500).json({ error: "Triage analysis failed" });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const data = chatSchema.parse(req.body);
      
      const response = await chatWithAI(data.message);
      
      res.json({ message: response });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Chat failed" });
    }
  });

  app.post("/api/alerts", async (req, res) => {
    try {
      const data = alertSchema.parse(req.body);
      
      const alert = await storage.createAlert({
        userId: data.userId,
        location: data.location,
        urgency: data.urgency,
        description: data.description,
        status: "pending",
      });

      res.json(alert);
    } catch (error) {
      console.error("Alert creation error:", error);
      res.status(400).json({ error: "Invalid request" });
    }
  });

  app.get("/api/alerts", async (req, res) => {
    try {
      const userId = req.query.userId as string | undefined;
      
      const alerts = userId 
        ? await storage.getAlertsByUser(userId)
        : await storage.getAlerts();
      
      res.json(alerts);
    } catch (error) {
      console.error("Get alerts error:", error);
      res.status(500).json({ error: "Failed to fetch alerts" });
    }
  });

  app.patch("/api/alerts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = updateAlertSchema.parse(req.body);
      
      const alert = await storage.updateAlertStatus(id, data.status);
      
      if (!alert) {
        return res.status(404).json({ error: "Alert not found" });
      }

      res.json(alert);
    } catch (error) {
      console.error("Update alert error:", error);
      res.status(400).json({ error: "Invalid request" });
    }
  });

  app.post("/api/health-logs", async (req, res) => {
    try {
      const data = insertHealthLogSchema.parse(req.body);
      const log = await storage.createHealthLog(data);
      res.json(log);
    } catch (error) {
      console.error("Health log error:", error);
      res.status(400).json({ error: "Invalid request" });
    }
  });

  app.get("/api/health-logs/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const logs = await storage.getHealthLogsByUser(userId);
      res.json(logs);
    } catch (error) {
      console.error("Get health logs error:", error);
      res.status(500).json({ error: "Failed to fetch health logs" });
    }
  });

  app.get("/api/chat-history/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const history = await storage.getAIChatLogsByUser(userId);
      res.json(history);
    } catch (error) {
      console.error("Get chat history error:", error);
      res.status(500).json({ error: "Failed to fetch chat history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
