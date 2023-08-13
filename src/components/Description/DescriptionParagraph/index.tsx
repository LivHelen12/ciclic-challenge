import { ReactNode } from "react";

interface DescriptionParagraphProps {
  children: ReactNode;
}

function DescriptionParagraph({ children }: DescriptionParagraphProps) {
  return <p>{children}</p>;
}

export default DescriptionParagraph;
