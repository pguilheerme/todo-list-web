type CreateTaskProp = {
  id: string;
  titulo: string;
  descricao: string;
  concluida: boolean;
  urgencia: "PADRAO" | "IMPORTANTE" | "URGENTE" | "CRITICA";
  dataParaConclusao: string;
  dataDeCriacao: string;
  usuarioId: string;
};

type GetTaskProp = {
  id: string;
  titulo: string;
  descricao: string;
  dataParaConclusao: string;
};

export type { CreateTaskProp, GetTaskProp };
