import { HTMLAttributes } from "react";
import "./style.scss";
interface FormActionProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function FormAction({ children, ...props }: FormActionProps) {
  return (
    <button type="submit" className="button" {...props}>
      {children}
    </button>
  );
}
