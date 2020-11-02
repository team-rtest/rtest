import React from "react";

function Checkbox({ name, label, value, error, onChange }) {
  return (
    <div>
      <input type="checkbox" onChange={(e) => onChange(name, e.target.checked)} /> {label}
    </div>
  );
}

export default Checkbox;
