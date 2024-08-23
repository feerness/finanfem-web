import PropTypes from 'prop-types';

export function Button({ onClick, children }) {
    return (
      <button
        className="bg-pink-500 px-4 py-1 rounded-md my-2 disabled:bg-pink-300"
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