import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "@/components/AuthForm";
import type { User } from "@shared/schema";

export default function Signup() {
  const [, setLocation] = useLocation();
  const { setUser } = useUser();
  const { toast } = useToast();

  const signupMutation = useMutation({
    mutationFn: async (data: { email: string; password: string; name?: string }) => {
      const result = await apiRequest<{ user: User }>("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.name || "User",
        }),
        headers: { "Content-Type": "application/json" },
      });
      return result;
    },
    onSuccess: (data) => {
      setUser(data.user);
      toast({
        title: "Account created",
        description: "Welcome to LifeLink AI!",
      });
      setLocation("/dashboard");
    },
    onError: (error: Error) => {
      toast({
        title: "Signup failed",
        description: error.message || "Could not create account",
        variant: "destructive",
      });
    },
  });

  const handleSignup = (data: { email: string; password: string; name?: string }) => {
    signupMutation.mutate(data);
  };

  return <AuthForm mode="signup" onSubmit={handleSignup} />;
}
