import PropTypes from "prop-types";
import "./UI.css";

export function Button({ onClick, children }) {
<<<<<<< HEAD
    return (
      <button
        className=""
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
=======
  return (
    <button className="replyBtn" onClick={onClick}>
      {children}
    </button>
  );
}
>>>>>>> master

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
