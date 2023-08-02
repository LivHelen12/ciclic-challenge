interface FormTitleProps {
  children: string;
}

export function FormTitle({ children }: FormTitleProps) {
  return <h1>{children}</h1>;
}
