import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="">
    {children}
  </Link>
);

ButtonLink.propTypes = {
    to: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  };