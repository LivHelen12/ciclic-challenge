import { LabelHTMLAttributes } from "react";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string;
}

export function FormLabel({ children, ...props }: FormLabelProps) {
  return <label {...props}>{children}</label>;
}
