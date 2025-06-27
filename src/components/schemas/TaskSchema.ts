import { z } from "zod";

export const CreateTaskSchema = z.object({
  titulo: z.string().min(1, "Título é obrigatório"),
  descricao: z.string().min(1, "Descrição é obrigatória"),
  urgercia: z.enum(["PADRAO", "IMPORTANTE", "URGENTE", "CRITICA"]),
  dataParaConclusao: z.string().min(1, "Data para conclusão é obrigatória"),
});

export const UpdateTaskSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
  titulo: z.string().min(1, "Título é obrigatório").optional(),
  descricao: z.string().min(1, "Descrição é obrigatória").optional(),
  urgercia: z.enum(["PADRAO", "IMPORTANTE", "URGENTE", "CRITICA"]).optional(),
  dataParaConclusao: z
    .string()
    .min(1, "Data para conclusão é obrigatória")
    .optional(),
});

export type CreateTaskSchemaType = z.infer<typeof CreateTaskSchema>;
export type UpdateTaskSchemaType = z.infer<typeof UpdateTaskSchema>;
