import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function FormInput({ ...props }: FormInputProps) {
  return <input {...props} />;
}
