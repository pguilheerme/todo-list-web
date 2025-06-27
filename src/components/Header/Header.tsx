import { useAuth } from "@/hooks/useAuth";
import Button from "../Button/Button";

export function Header() {
  const { logout } = useAuth();
  return (
    <header className="bg-gray-100 flex justify-between items-center w-full h-20 mt-3 lg:shadow-md rounded-md px-5">
      <h1 className="text-3xl font-bold text-center my-4">Todo List</h1>
      <Button variant="solid" size="medium" onClick={logout}>
        Sair
      </Button>
    </header>
  );
}
