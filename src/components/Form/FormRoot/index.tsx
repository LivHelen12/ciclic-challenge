import { FormEvent, ReactNode } from "react";

import "./style.scss";
interface FormRootProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function FormRoot({ children, onSubmit }: FormRootProps) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
