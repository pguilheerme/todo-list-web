import Button from "@/components/Button/Button";
import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
  const { logout } = useAuth();
  return (
    <div className="w-full min-h-auto flex justify-center items-center">
      <h1>Home</h1>
      <Button onClick={logout}>Sair</Button>
    </div>
  );
}
