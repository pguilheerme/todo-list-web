import { CreateTaskProp, GetTaskProp } from "./TasksTypes";
import { User } from "./User";

export interface AuthRespose {
  resposta: {
    usuario: User;
    token: string;
  };
}

export type GetTaskResponse = {
  resposta: {
    tarefas: GetTaskProp[];
    totalDeTarefas: number;
    paginaAtual: number;
    totalDePaginas: number;
  };
};

export type CreateTaskResponse = {
  resposta: string;
  tarefa: CreateTaskProp[];
};
