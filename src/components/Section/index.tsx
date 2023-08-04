import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return <section>{children}</section>;
};
