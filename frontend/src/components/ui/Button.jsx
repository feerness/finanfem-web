import PropTypes from 'prop-types';

export function Button({ onClick, children }) {
    return (
      <button
        className=""
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
  };