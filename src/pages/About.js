import React, { Component } from "react";
import "../App.css";
import Profile from "../images/profile-pic.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <section className="Card">
          <img src={Profile} alt="Profile-pic" />
          <h1>Himanshu Koshti</h1>
          <p>
            Hi, I am Computer Science Engineer. I complete my graduation in 2020
            from Global Engineering College, Jabalpur. Currently Working in Tata
            Consultancy Services as Assistant System Engineer.
          </p>
        </section>
      </div>
    );
  }
}

export default About;
