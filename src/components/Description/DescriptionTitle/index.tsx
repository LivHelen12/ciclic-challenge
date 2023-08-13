interface DescriptionTitleProps {
  children: string;
}

export function DescriptionTitle({ children }: DescriptionTitleProps) {
  return <h1>{children}</h1>;
}
