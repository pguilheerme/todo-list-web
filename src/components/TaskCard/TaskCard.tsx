import { GetTaskProp } from "@/types/TasksTypes";

interface TaskCardProps {
  task: GetTaskProp;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {task.titulo}
      </h3>
      <p className="text-gray-600 mb-3">{task.descricao || "Sem descrição."}</p>
      <div className="text-sm text-gray-500">
        📅 Concluir até:{" "}
        <span className="font-medium text-gray-700">
          {new Date(task.dataParaConclusao).toLocaleDateString("pt-BR")}
        </span>
      </div>
    </div>
  );
}
