import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return <section>{children}</section>;
}
