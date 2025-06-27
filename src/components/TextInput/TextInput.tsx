import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: string;
  register?: UseFormRegisterReturn;
}

export default function TextInput({
  label,
  name,
  error,
  register,
  ...rest
}: TextInputProps) {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-400"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        {...register}
        {...rest}
        className={`border h-12 ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md p-2 w-full shadow-sm pl-4`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
