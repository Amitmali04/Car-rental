import React, { useState } from "react";
import { loginFormControls } from "../../navigation";
import InputField from "../../compnents/InputField";
import SelectField from "../../compnents/SelectField";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow-lg px-5 py-3">
          <h1 className="mb-3 text-uppercase">Login</h1>

          {/* <div className="success-data">
                    <div className="text-center d-flex flex-column">
                        <i className="fa-solid fa-badge-check"></i> 
                        <span className="text-center fs-1">You have been logged in  Successfully</span> </div>
                </div> */}
          {loginFormControls.map((controlItem) =>
            (
              <div key={controlItem.id} className="">
                {controlItem.componentType === "input" ? (
              <InputField
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                label={controlItem.label}
                // onChange={(event) => {
                //   setFormData({
                //     ...formData,
                //     [controlItem.id]: event.target.value,
                //   });
                // }}
                // value={formData[controlItem.id]}
              />
            ) : controlItem.componentType === "select" ? (
              <SelectField
                options={controlItem.options}
                label={controlItem.label}
                // onChange={(event) => {
                //   setFormData({
                //     ...formData,
                //     [controlItem.id]: event.target.value,
                //   });
                // }}
                // value={formData[controlItem.id]}
              />
            ) : null}
              </div>
            )
          )}

          <div className="mb-3">
            <button className="btn btn-dark w-100">Login</button>
          </div>

          <div className="d-flex justify-content-between mb-5 mt-4">
          <p>New to Website</p>
          <Link to={"/register"} className="btn btn-dark w-50">Register</Link>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Login;
