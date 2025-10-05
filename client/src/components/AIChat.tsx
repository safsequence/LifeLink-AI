import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useUser } from "@/contexts/UserContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Brain, Send, User, Loader2 } from "lucide-react";
import type { TriageResponse } from "@shared/schema";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
  urgencyScore?: number;
  medicalFlags?: string[];
  firstAid?: string[];
}

interface AIChatProps {
  messages?: Message[];
  onSendMessage?: (message: string) => void;
}

export default function AIChat({ messages: initialMessages, onSendMessage }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages || []);
  const [input, setInput] = useState("");
  const { user } = useUser();

  const triageMutation = useMutation({
    mutationFn: async (symptoms: string) => {
      return await apiRequest<TriageResponse>("/api/triage", {
        method: "POST",
        body: JSON.stringify({ symptoms }),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: (data, symptoms) => {
      const firstAidText = data.first_aid?.join("\n• ") || "No specific first aid recommended";
      const flagsText = data.medical_flags?.length > 0
        ? `\n\n⚠️ Medical Flags: ${data.medical_flags.join(", ")}`
        : "";

      const aiResponse: Message = {
        id: Date.now().toString(),
        role: "ai",
        content: `${data.summary_for_rescue_en}\n\nFirst Aid:\n• ${firstAidText}${flagsText}`,
        timestamp: new Date(),
        urgencyScore: data.urgency_score,
        medicalFlags: data.medical_flags,
        firstAid: data.first_aid,
      };
      setMessages((prev) => [...prev, aiResponse]);
    },
    onError: () => {
      const errorResponse: Message = {
        id: Date.now().toString(),
        role: "ai",
        content: "I apologize, but I'm having trouble analyzing your symptoms right now. If this is an emergency, please call your local emergency number immediately (999).",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    },
  });

  const handleSend = () => {
    if (!input.trim() || !user) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    onSendMessage?.(input);
    const symptoms = input;
    setInput("");
    
    triageMutation.mutate(symptoms);
  };

  return (
    <Card className="flex flex-col h-[600px]">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Doctor Chat
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <Brain className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Describe your symptoms to get instant AI-powered medical guidance
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                  data-testid={`message-${message.role}-${message.id}`}
                >
                  {message.role === "ai" && (
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                        <Brain className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                  <div className={`max-w-[80%] ${message.role === "user" ? "order-1" : ""}`}>
                    <Card className={message.role === "user" ? "bg-primary text-primary-foreground" : ""}>
                      <CardContent className="p-3">
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        {message.urgencyScore !== undefined && (
                          <div className="mt-2">
                            <Badge variant="outline" className="text-xs">
                              Urgency: {message.urgencyScore}/10
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                    <p className="text-xs text-muted-foreground mt-1 px-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  {message.role === "user" && (
                    <div className="flex-shrink-0 order-2">
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="border-t p-4">
          <div className="flex gap-2">
            <Textarea
              placeholder="Describe your symptoms..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="min-h-[80px] resize-none"
              data-testid="input-chat-message"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="h-[80px]"
              disabled={triageMutation.isPending}
              data-testid="button-send-message"
            >
              {triageMutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
