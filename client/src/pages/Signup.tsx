import { useLocation } from "wouter";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import AuthForm from "@/components/AuthForm";

export default function Signup() {
  const [, setLocation] = useLocation();
  const { setUser } = useUser();
  const { toast } = useToast();

  const handleSignup = async (data: { email: string; password: string; name?: string }) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.name || "User",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast({
          title: "Signup failed",
          description: result.error || "Failed to create account",
          variant: "destructive",
        });
        return;
      }

      setUser(result.user);
      
      toast({
        title: "Account created",
        description: "Welcome to LifeLink AI!",
      });
      setLocation("/dashboard");
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "An error occurred during signup",
        variant: "destructive",
      });
    }
  };

  return <AuthForm mode="signup" onSubmit={handleSignup} />;
}
