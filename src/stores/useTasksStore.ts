// store/useTaskStore.ts
import { create } from "zustand";
import tasksService from "@/services/tasks";
import {
  CreateTaskSchemaType,
  UpdateTaskSchemaType,
} from "@/components/schemas/TaskSchema";
import { GetTaskResponse } from "@/types/Responses";
import { GetTaskProp } from "@/types/TasksTypes";

interface TaskState {
  tasks: GetTaskProp[];
  totalPages: number;
  isLoading: boolean;
  fetchTasks: (page?: number, title?: string) => Promise<void>;
  addTask: (task: CreateTaskSchemaType) => Promise<void>;
  updateTask: (task: UpdateTaskSchemaType) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  totalPages: 1,
  isLoading: false,

  fetchTasks: async (page = 1, title = "") => {
    set({ isLoading: true });
    try {
      const response: GetTaskResponse = await tasksService.getTasks(
        page,
        title
      );
      set({ tasks: response.tarefa, totalPages: response.totalDePaginas });
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  addTask: async (task) => {
    await tasksService.addTask(task);
    await get().fetchTasks();
  },

  updateTask: async (task) => {
    await tasksService.updateTask(task);
    await get().fetchTasks();
  },

  deleteTask: async (id) => {
    await tasksService.deleteTask(id);
    await get().fetchTasks();
  },
}));
