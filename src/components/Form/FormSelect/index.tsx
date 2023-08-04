import { SelectHTMLAttributes } from "react";
import { options } from "./options";

import "./style.scss";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const FormSelect = ({ ...props }: FormSelectProps) => {
  return (
    <select {...props} className="select">
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
};