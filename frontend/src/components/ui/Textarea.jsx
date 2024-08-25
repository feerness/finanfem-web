import { forwardRef } from "react";
import "./UI.css"; // Importa el archivo CSS

export const Textarea = forwardRef((props, ref, rows = 2) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className="custom-textarea" // Usa la clase CSS
      rows={rows}
    />
  );
});

Textarea.displayName = "Textarea";
export default Textarea;
