import { useState } from "react";
import { TextInputProps } from "../TextInput/TextInput";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

type PasswordInputProps = TextInputProps;
export function PasswordInput({
  label,
  name,
  error,
  register,
  ...rest
}: PasswordInputProps) {
  const [isVisibleState, setIsVisibleState] = useState<boolean>(false);

  function handleToggleVisibility() {
    setIsVisibleState((prev) => !prev);
  }

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
      <div
        className={`border h-12 ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md p-2 w-full shadow-sm flex items-center`}
      >
        <input
          id={name}
          name={name}
          className={`h-12 w-full ${
            error ? "border-red-500" : "border-gray-300"
          } p-2 bg-transparent outline-none`}
          {...register}
          {...rest}
          type={isVisibleState ? "text" : "password"}
        />
        {isVisibleState ? (
          <VscEye
            size={20}
            onClick={handleToggleVisibility}
            className="cursor-pointer ml-2"
          />
        ) : (
          <VscEyeClosed
            size={20}
            onClick={handleToggleVisibility}
            className="cursor-pointer ml-2"
          />
        )}
      </div>

      {error && (
        <span style={{ color: "red", fontSize: "0.875rem" }}>{error}</span>
      )}
    </div>
  );
}
