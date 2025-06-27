import { RegisterSchemaType } from "@/components/schemas/RegisterSchema";

export type RegisterRequest = Omit<RegisterSchemaType, "confirmarSenha">;
