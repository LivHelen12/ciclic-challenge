import { LabelHTMLAttributes } from "react";
import "./style.scss";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
}

export function FormLabel({ children, ...props }: FormLabelProps) {
  return (
    <label {...props} className="label">
      {children}
    </label>
  );
}
