import React from "react";

function Select({ dataIn, label, handleData, selectedValue, id }) {
  const handleChange = (e) => {
    handleData(e.target.value, id);
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <select
        className="form-select"
        id={id}
        onChange={handleChange}
        value={selectedValue}

      >
        {dataIn.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
