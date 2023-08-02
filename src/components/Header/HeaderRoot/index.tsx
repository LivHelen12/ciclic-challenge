import { ReactNode } from "react";
import "./style.scss";

interface HeaderRootProps {
  children: ReactNode;
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return <header className="wrapper">{children}</header>;
}
