import { HTMLAttributes } from "react";

interface FormActionProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function FormAction({ children, ...props }: FormActionProps) {
  return <button {...props}>{children}</button>;
}
