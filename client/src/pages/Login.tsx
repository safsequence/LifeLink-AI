import { useLocation } from "wouter";
import AuthForm from "@/components/AuthForm";

export default function Login() {
  const [, setLocation] = useLocation();

  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login attempt:", data);
    localStorage.setItem("user", JSON.stringify({ name: "John Doe", role: "patient", email: data.email }));
    setLocation("/dashboard");
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
}
