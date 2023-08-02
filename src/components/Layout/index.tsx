import { ReactNode } from "react";

import "./style.scss";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="layout">{children}</div>
    </>
  );
}
