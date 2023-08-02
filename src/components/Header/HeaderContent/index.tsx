import { ReactNode } from "react";
import "./style.scss";

interface HeaderContentProps {
  children: ReactNode | string;
}

export function HeaderContent({ children }: HeaderContentProps) {
  return <h1 className="content">{children}</h1>;
}
