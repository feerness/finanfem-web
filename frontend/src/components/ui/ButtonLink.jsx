import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="bg-purple-950 px-4 py-1 rounded-md">
    {children}
  </Link>
);

ButtonLink.propTypes = {
    to: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  };