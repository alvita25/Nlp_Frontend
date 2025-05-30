import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About DUT Test Chatbot</h1>

      <section className="about-card fade-in" style={{ animationDelay: "0.1s" }}>
        <h2>Problem Statement</h2>
        <p>
          Create a POC (Proof Of Concept) to demonstrate the feasibility of Nokia’s Test Procedure Automation using NLP/NLU.
        </p>
      </section>

      <section className="about-card fade-in" style={{ animationDelay: "0.1s" }}>
        <h2>Theme</h2>
        <p>
          ML(NLP/NLU) Powered Test Procedure Automation
        </p>
      </section>

      <section className="about-card fade-in" style={{ animationDelay: "0.5s" }}>
        <h2>Technologies Used</h2>
        <ul>
          <li>Python</li>
          <li>Jupyter</li>
          <li>Natural Language Processing (NLP): spaCy</li>
          <li>Machine Learning (ML): scikit-learn</li>
          <li>ReactJS for building UI</li>
          <li>CSS for responsive design</li>
        </ul>
      </section>

      <div className="people-row fade-in" style={{ animationDelay: "0.7s" }}>
        <section className="about-card people-box">
          <h2>Mentors</h2>
          <ul>
            <li>Raman Geetha Gopalakrishnan</li>
            <li>Uthayan Muthukrishnan</li>
          </ul>
        </section>

        <section className="about-card people-box">
          <h2>Team Members</h2>
          <ul>
            <li>Alvita Mary D silva</li>
            <li>Harsh Singh</li>
            <li>Hitanshi Singh</li>
            <li>Krish Sangwan</li>
            <li>Harshit Sharma</li>
            <li>Pragathi S Rao</li>
            <li>Sagar</li>
            <li>Mansi Jha</li>
            <li>Shah suraj kumar</li>
            <li>DEEPTHI POORNA V CI22A</li>
          </ul>
        </section>
      </div>

    </div>
  );
}
