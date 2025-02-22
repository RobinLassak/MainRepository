import React from "react";

function ChbGroup({ label, id, dataIn, handleData, selectedValue }) {
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      handleData([...selectedValue, value], id);
    } else {
      handleData(
        selectedValue.filter((item) => item !== value),
        id
      );
    }
  };

  return (
    <div id={id}>
      <div className="mb-1">{label}</div>
      {dataIn.map((item, index) => (
        <div key={index} className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id={item.label}
            value={item.value}
            onChange={handleChange}
            checked={selectedValue.includes(item.value)}
          />
          <label className="form-check-label" htmlFor={item.label}>
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ChbGroup;
