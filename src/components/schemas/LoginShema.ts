import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Insira um email válido")
    .min(1, "Email é obrigatório"),
  senha: z.string().min(1, "Senha é obrigatória"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
