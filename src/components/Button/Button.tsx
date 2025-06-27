import { ReactNode } from "react";
import { Loading } from "../Loading/Loading";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ghost" | "outlined" | "solid";
  isLoading?: boolean;
}

export default function Button({
  children,
  variant,
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`h-12 w-full rounded-md flex justify-center items-center ${
        variant === "ghost"
          ? ""
          : variant === "outlined"
          ? "border border-gray-300 text-gray-800"
          : "bg-green-800 text-white"
      } hover:opacity-80 disabled:opacity-60`}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Loading variant="button" size="small" /> : children}
    </button>
  );
}
