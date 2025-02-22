import React from "react";

function TextArea({ label, dataIn, handleData, height, id }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="form-control"
        onChange={handleChange}
        value={dataIn}
        id={id}
        style={{ height: `${height}px` }}
      />
    </>
  );
}

export default TextArea;
