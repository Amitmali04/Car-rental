import React, { useState } from "react";
import { registrationFormControls } from "../../navigation";
import InputField from "../../compnents/InputField";
import SelectField from "../../compnents/SelectField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  role: "customer",
};

const Register = () => {
  const navigate = useNavigate();
  const [formvalue, setFormvalue] = useState(initialFormData);
  const [message, setMessage] = useState("");

  console.log(formvalue);

  const submitHandle = async (e) => {
    e.preventDefault();

    // const {name,email ,password, role} = formData
    // const sendData = [...formData]
    const formData = {
      username: formvalue.name,
      email: formvalue.email,
      password: formvalue.password,
      role: formvalue.role,
    };

    const res = await axios.post(
      "http://localhost/reactPHP/api/registerUser.php",
      formData
    );

    const resData = res.json();

    localStorage.setItem("user", JSON.stringify(resData))

    if (res.data.success) {
      setMessage(res.data.success);
       setTimeout( ()=>{
            navigate('/login');
       }, 2000);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow-lg px-5 py-3    ">
          <h1 className="mb-3 text-uppercase">Register</h1>
              {
                !message ? " " :
                <div className="alert alert-success" role="alert">
                <p className="text-center m-1">{message}</p>
              </div>
              }

          {registrationFormControls.map((controlItem) => (
            <div key={controlItem.id}>
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
          ))}

          <div className="mb-3">
            <button onClick={submitHandle} className="btn btn-dark w-100">
              Register
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <p>Already have Account ?</p>
            <Link to={"/login"} className="btn btn-dark w-50">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
