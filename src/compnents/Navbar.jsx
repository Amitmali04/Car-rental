import React from "react";
import { Link, NavLink } from "react-router-dom";
import { adminNavOptions, customerNavOptions, navOptions } from "../navigation";

const isAgentView = true;
const isAuthUser = true;

const user = {
  role: "agent",
};

function NavItem() {
  return (
    <>
    
      {isAgentView && isAuthUser  
        ?
        user.role === "agent"
          ? adminNavOptions.map((agent) => (
              <li className="nav-item me-3" key={agent.id}>
                <Link className="nav-link text-light" to={agent.path}>
                  {agent.label}
                </Link>
              </li>
            ))
          : customerNavOptions.map((agent) => (
              <li className="nav-item me-3" key={agent.id}>
                <Linl className="nav-link text-light" to={agent.path}>
                  {agent.label}
                </Linl>
              </li>
            ))
            : navOptions.map((agent) => (
              <li className="nav-item me-3" key={agent.id}>
                <Link className="nav-link text-light" to={agent.path}>
                  {agent.label}
                </Link>
              </li>
            ))
        }
    </>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      <div className="container">
        <Link className="navbar-brand fs-2 fw-bold" href="#">
          <span className="text-danger">Car</span>Rental
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDark"
          aria-controls="navbarDark"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse show" id="navbarDark">
          <ul className="navbar-nav ms-auto mb-2 mb-xl-0 fs-5 ms-auto p-2 text-center"> 
            <NavItem />
            {isAgentView && isAuthUser ? (
             <li className="nav-item me-3">
             <a  className="nav-link text-light" aria-current="page">
               Logout
             </a>
           </li>
          ) : <li className="nav-item me-3">
          <Link  to={"/login"}className="nav-link text-light" aria-current="page">
            Login
          </Link>
        </li>
        }
          
          </ul>
        </div>
      </div>
    </nav>
  );
};
