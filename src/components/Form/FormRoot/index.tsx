import { ReactNode } from "react";

interface FormRootProps {
  children: ReactNode;
}

export function FormRoot({ children }: FormRootProps) {
  return (
    <main>
      <section>
        <form>{children}</form>
      </section>
    </main>
  );
}
