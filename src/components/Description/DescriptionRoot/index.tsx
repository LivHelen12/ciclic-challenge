import { ReactNode } from "react";

interface DescriptionRootProps {
  children: ReactNode;
}

export function DescriptionRoot({ children }: DescriptionRootProps) {
  return <>{children}</>;
}
