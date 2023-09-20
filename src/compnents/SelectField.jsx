import React from 'react';

export default function SelectFiel({ label, value, onChange, options = [] }) {
    
  return (
    <div className="form-floating mb-3">
      <select
        value={value}
        onChange={onChange}
        className="form-control"
      >

        <option value="">Select</option>
        {options.map((optionItem) => (
          <option value={optionItem.id} key={optionItem.id}>
            {optionItem.label}
          </option>
        ))}
      </select>
      <label>{label}</label>
    </div>
  );
}
