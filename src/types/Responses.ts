import { CreateTaskProp, GetTaskProp } from "./TasksTypes";
import { User } from "./User";

export interface AuthRespose {
  resposta: {
    usuario: User;
    token: string;
  };
}

export type GetTaskResponse = {
  resposta: string;
  tarefa: GetTaskProp[];
  totalDeTarefas: number;
  paginaAtual: number;
  totalDePaginas: number;
};

export type CreateTaskResponse = {
  resposta: string;
  tarefa: CreateTaskProp[];
};
