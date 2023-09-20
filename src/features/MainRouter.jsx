import React from "react";
import Layout from "../compnents/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";
import Register from "./Register/Register";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  );
};

export default MainRouter;
