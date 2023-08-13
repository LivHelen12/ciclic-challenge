import { SelectHTMLAttributes } from "react";
import { options } from "./options";

import "./style.scss";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function FormSelect({ ...props }: FormSelectProps) {
  return (
    <select {...props} className="select">
      <option value="" selected>
        Selecione uma opção
      </option>

      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label === 1
              ? `${option.label} ano`
              : `${option.label} anos`}
          </option>
        );
      })}
    </select>
  );
}
