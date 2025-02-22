import React from "react";

function TextBox({ label, dataIn, handleData, id }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        value={dataIn}
        id={id}
      />
    </>
  );
}

export default TextBox;