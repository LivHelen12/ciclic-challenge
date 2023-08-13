import { ReactNode } from "react";

interface DescriptionParagraphProps {
  children: ReactNode;
}

export function DescriptionParagraph({ children }: DescriptionParagraphProps) {
  return <p>{children}</p>;
}
