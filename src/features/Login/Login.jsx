import React, { useState } from "react";
import { loginFormControls } from "../../navigation";
import InputField from "../../compnents/InputField";
import SelectField from "../../compnents/SelectField";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const initialFormData = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const [formvalue, setFormvalue] = useState(initialFormData)

  console.log(formvalue)

  const loginHandle = async (e) => {
    e.preventDefault();
    const formData = {
      email: formvalue.email,
      password: formvalue.password,
    };

    const res = await axios.post(
      "http://localhost/reactPHP/api/login.php",
      formData
    );

    localStorage.setItem("user", JSON.stringify(res));

    if (res.data.success) {
      setMessage(res.data.success);  

      //  setTimeout( ()=>{
      //       navigate('/login');
      // }, 2000);
    }
  };


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow-lg px-5 py-3">
          <h1 className="mb-3 text-uppercase">Login</h1>

          {
                !message ? " " :
                <div className="alert alert-success" role="alert">
                <p className="text-center m-1">{message}</p>
              </div>
              }
          {loginFormControls.map((controlItem) =>
            (
              <div key={controlItem.id} className="">
                {controlItem.componentType === "input" ? (
              <InputField
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                label={controlItem.label}
                onChange={(event) => {
                  setFormvalue({
                    ...formvalue,
                    [controlItem.id]: event.target.value,
                  });
                }}
                value={formvalue[controlItem.id]}
              />
            ) : controlItem.componentType === "select" ? (
              <SelectField
                options={controlItem.options}
                label={controlItem.label}
                onChange={(event) => {
                  setFormvalue({
                    ...formvalue,
                    [controlItem.id]: event.target.value,
                  });
                }}
                value={formvalue[controlItem.id]}
              />
            ) : null}
              </div>
            )
          )}

          <div className="mb-3">
            <button onClick={loginHandle} className="btn btn-dark w-100">Login</button>
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
