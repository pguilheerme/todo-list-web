import { CreateTaskResponse, GetTaskResponse } from "@/types/Responses";
import api from "./api";
import {
  CreateTaskSchemaType,
  UpdateTaskSchemaType,
} from "@/components/schemas/TaskSchema";

class tasksService {
  async getTasks(pagina: number, titulo: string): Promise<GetTaskResponse> {
    const { data } = await api.get<GetTaskResponse>(
      `/tarefas${pagina ? `?pagina=${pagina}` : ""}${
        titulo ? `&titulo=${titulo}` : ""
      }`
    );
    return data;
  }

  async addTask(task: CreateTaskSchemaType): Promise<CreateTaskResponse> {
    const { data } = await api.post<CreateTaskResponse>("/tarefas", task);
    return data;
  }

  async updateTask(task: UpdateTaskSchemaType): Promise<CreateTaskResponse> {
    const { data } = await api.put<CreateTaskResponse>(
      `/tarefas/${task.id}`,
      task
    );
    return data;
  }

  async deleteTask(taskId: number): Promise<void> {
    const { data } = await api.delete(`/tarefas/${taskId}`);
    return data;
  }
}

export default new tasksService();
