import React from "react";

export default function InputField({
  label,
  placeholder,
  onChange,
  value,
  type,
}) {
  return (
    <>  
       <div className="form-floating mb-3">
       <input
         placeholder={placeholder}
         type={type || "text"}
         value={value}
         onChange={onChange}
         className="form-control"
       />
       <label >{label}</label>
     </div>
    </>

  );
}
