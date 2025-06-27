/* eslint-disable react-hooks/exhaustive-deps */
import { useTaskStore } from "@/stores/useTasksStore";
import { useEffect, useState } from "react";
import { TaskCard } from "../TaskCard/TaskCard";
import Button from "../Button/Button";
import { VscAdd } from "react-icons/vsc";
import { CreateTaskModal } from "@/Modals/CreateTaskModal";

export function TaskList() {
  const { tasks, fetchTasks } = useTaskStore();
  const [isCreateTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks(1);
  }, []);

  function handleOpenCreateTaskNodal() {
    setCreateTaskModalOpen(true);
  }

  function handleCloseCreateTaskModal() {
    setCreateTaskModalOpen(false);
  }

  return (
    <>
      <CreateTaskModal
        isOpen={isCreateTaskModalOpen}
        onClose={handleCloseCreateTaskModal}
      />

      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-2xl mt-10 p-6 border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          📋 Lista de Tarefas
        </h1>
        <div className="w-full my-10">
          <Button
            variant="outlined"
            size="medium"
            onClick={handleOpenCreateTaskNodal}
          >
            <VscAdd size={20} />
            Criar tarefa
          </Button>
        </div>

        {tasks.length === 0 ? (
          <div className="text-gray-500 text-center py-10">
            Nenhuma tarefa encontrada.
          </div>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
