import { Header } from "@/components/Header/Header";
import { TaskList } from "@/components/TaskList/TaskList";

export default function HomePage() {
  return (
    <div className="w-full min-h-auto flex items-center justify-center">
      <div className="lg:w-[80%] w-[90%] flex flex-col items-center justify-center">
        <Header />
        <TaskList />
      </div>
    </div>
  );
}
