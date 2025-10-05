import { useLocation } from "wouter";
import AuthForm from "@/components/AuthForm";

export default function Signup() {
  const [, setLocation] = useLocation();

  const handleSignup = (data: { email: string; password: string; name?: string }) => {
    console.log("Signup attempt:", data);
    localStorage.setItem("user", JSON.stringify({ name: data.name || "User", role: "patient", email: data.email }));
    setLocation("/dashboard");
  };

  return <AuthForm mode="signup" onSubmit={handleSignup} />;
}
