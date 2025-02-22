import React from "react";

function Button({ label, handleEvent, id }) {
  const handleClick = () => {
    handleEvent(id);
  };
  return (
    <button
      type="button"
      id={id}
      onClick={handleClick}
      className="btn btn-outline-secondary"
    >
      {label}
    </button>
  );
}

export default Button;
