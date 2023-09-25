import React from "react";
import Card from "../compnents/Card";

const Home = () => {
  return (
    <>
      <section className="container shadow-lg mb-5 bg-white rounded">
        <div className="hero">
          <h1>Welcome to Our Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="btn btn-primary btn-hero">
            Learn More
          </a>
        </div>
      </section>

      <section className="container shadow-lg mb-5 p-2 bg-white rounded">
        <h2>Availables Car</h2>
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      {/* <Footer /> */}

    </>
  );
};

export default Home;
