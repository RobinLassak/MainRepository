import React from "react";

function File({ label, handleData, id }) {
  const handleChange = (ev) => {
    const file = ev.target.files[0];
    if (file) {
      const reader = new FileReader();
      // text musí být kódovaný v UTF-8
      reader.readAsText(file);
      reader.onload = (e) => {
        const text = e.target.result;
        handleData(text, id); // Callback funkce posílá text zpět do rodičovské komponenty
      };
    }
  };
  return (
    <>
      <input
        className="form-control"
        type="file"
        id={id}
        onChange={handleChange}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
    </>
  );
}

export default File;
