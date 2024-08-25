import PropTypes from "prop-types";
import "./UI.css"; // Importa el archivo CSS

export function Card({ children }) {
  return <div className="card">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
