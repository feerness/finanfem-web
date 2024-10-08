import PropTypes from "prop-types";
import "./UI.css";

export function Button({ onClick, children }) {

  return (
    <button className="replyBtn" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
