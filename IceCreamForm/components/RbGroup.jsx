function RbGroup({ label, id, dataIn, handleData, selectedValue }) {
    const handleChange = (e) => {
      handleData(e.target.value, id);
    };
  
    return (
      <div id={id}>
        <div className="mb-1">{label}</div>
        {dataIn.map((item, index) => (
          <div key={index} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={id}
              id={item.label}
              value={item.value}
              onChange={handleChange}
              checked={selectedValue === item.value}
            />
            <label className="form-check-label" htmlFor={item.label}>
              {item.label}
            </label>
          </div>
        ))}
      </div>
    );
  }
  
  export default RbGroup;
  