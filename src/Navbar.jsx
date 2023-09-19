import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-xl navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand fs-2 fw-bold" href="#">
          <span class="text-danger">Car</span>Rental
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDark"
          aria-controls="navbarDark"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse show" id="navbarDark">
          <ul class="navbar-nav ms-auto mb-2 mb-xl-0 fs-5 ms-auto p-2 text-center">
            <li class="nav-item me-3">
              <a class="nav-link active " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">
                Service
              </a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="#">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
