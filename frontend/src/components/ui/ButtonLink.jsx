import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UI.css";

export const ButtonLink = ({ to, children }) => (

  <Link to={to} className="replyBtn">
    {children}
  </Link>
);

ButtonLink.propTypes = {
  to: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
