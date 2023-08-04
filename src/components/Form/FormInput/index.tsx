import { InputHTMLAttributes } from "react";
import "./style.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function FormInput({ ...props }: FormInputProps) {
  return <input {...props} className="input" />;
}
