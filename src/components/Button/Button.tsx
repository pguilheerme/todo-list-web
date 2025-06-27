import { ReactNode } from "react";
import { Loading } from "../Loading/Loading";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ghost" | "outlined" | "solid";
  isLoading?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Button({
  children,
  variant = "solid",
  isLoading,
  size = "medium",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`h-12 rounded-md flex justify-center items-center ${
        variant === "ghost"
          ? ""
          : variant === "outlined"
          ? "border border-gray-300 text-gray-800 hover:bg-green-800 hover:border-none hover:text-white disabled:opacity-60"
          : "bg-green-800 text-white hover:opacity-80 disabled:opacity-60"
      } ${
        size === "small" ? "w-20" : size === "medium" ? "w-32" : "w-full"
      } gap-2 px-2`}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Loading variant="button" size="small" /> : children}
    </button>
  );
}
