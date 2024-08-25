import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UI.css";

export const ButtonLink = ({ to, children }) => (
<<<<<<< HEAD
  <Link to={to} className="">
=======
  <Link to={to} className="replyBtn">
>>>>>>> master
    {children}
  </Link>
);

ButtonLink.propTypes = {
  to: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
