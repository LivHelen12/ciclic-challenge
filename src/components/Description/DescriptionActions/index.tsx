import { HTMLAttributes } from "react";
interface FormActionProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function DescriptionAction({ children, ...props }: FormActionProps) {
  return (
    <button type="submit" className="button" {...props}>
      {children}
    </button>
  );
}
