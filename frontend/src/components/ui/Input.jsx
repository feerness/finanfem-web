import { forwardRef } from "react";
import "./UI.css"; // Importa el archivo CSS global

export const Input = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="input-custom" // Usa la clase de CSS global
    />
  );
});

Input.displayName = "Input";
export default Input;
