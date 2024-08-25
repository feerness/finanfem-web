import PropTypes from "prop-types";
import "./UI.css"; // Asegúrate de que este archivo está importado

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="custom-label">
      {" "}
      {/* Aplica la clase CSS */}
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;
