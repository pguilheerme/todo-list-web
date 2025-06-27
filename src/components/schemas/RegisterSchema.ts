import { z } from "zod";

export const RegisterSchema = z
  .object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z
      .string()
      .email("Insira um email válido")
      .min(1, "Email é obrigatório"),
    senha: z
      .string()
      .min(1, "Senha é obrigatória")
      .min(6, "Senha deve ter no mínimo 8 caracteres"),
    confirmarSenha: z.string().min(1, "Cofirmação de senha é obrigatório"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "Senhas não coincidem",
    path: ["confirmarSenha"],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
