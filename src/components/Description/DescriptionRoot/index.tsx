import { ReactNode } from "react";

interface DescriptionRootProps {
  children: ReactNode;
}

export const DescriptionRoot = ({ children }: DescriptionRootProps) => {
  return <>{children}</>;
};
