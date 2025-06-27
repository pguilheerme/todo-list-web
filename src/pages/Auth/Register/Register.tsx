import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import TextInput from "@/components/TextInput/TextInput";
import { Link } from "react-router-dom";
import Button from "@/components/Button/Button";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import {
  RegisterSchema,
  RegisterSchemaType,
} from "../../../components/schemas/RegisterSchema";

const Login = () => {
  const { register } = useAuth();
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      nome: "",
      confirmarSenha: "",
      senha: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    register(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md lg:bg-white md:bg-white rounded-xl lg:shadow-md md:shadow-md overflow-hidden">
        <div className="p-8 flex flex-col items-center gap-8">
          <h1 className="text-3xl font-bold text-gray-900">Criar conta</h1>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 lg:px-5"
          >
            <TextInput
              label="Nome"
              name="nome"
              register={form.register("nome")}
              error={form.formState.errors.nome?.message}
            />
            <TextInput
              label="Email"
              name="email"
              register={form.register("email")}
              error={form.formState.errors.email?.message}
            />

            <PasswordInput
              label="Senha"
              name="senha"
              register={form.register("senha")}
              error={form.formState.errors.senha?.message}
            />
            <PasswordInput
              label="Confirmar senha"
              name="confirmarSenha"
              register={form.register("confirmarSenha")}
              error={form.formState.errors.confirmarSenha?.message}
            />
            <Button
              variant="solid"
              type="submit"
              size="large"
              disabled={!form.formState.isValid}
              isLoading={form.formState.isSubmitting}
            >
              Entrar
            </Button>
          </form>

          <Link
            to="/login"
            className="text-gray-500 hover:text-blue-600 underline transition duration-200"
          >
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
