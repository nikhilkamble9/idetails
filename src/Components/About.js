import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <h1>About and References</h1>
      <div className="details">
        <p className="aboutpara">About</p>
        <p className="lastpara">
          This Webpage was created to make a detailed Instructions on how to
          install VS Code, NodeJS and NPM, Git and React-App, So that a New
          person who started his journey in coding can have a little push.
        </p>
        <p className="lastpara">
          This webpage contains the details about how i installed these Software
          in my System for the very First time.
        </p>
        <p id="lastpara" className="lastpara">
          These instructions are perfect but if there is some mistakes i made,
          feel free to update the webpage as this will be deployed through
          github.
        </p>
      </div>
      <div className="references">
        <p className="refpara">
          Reference I took for the mentioned software on this website.
        </p>
        <a href="https://code.visualstudio.com/" target="#">
          For more detailed information on VS Code
        </a>
        <a href="https://git-scm.com/" target="#">
          For more detailed information on Git
        </a>
        <a
          href="https://reactjs.org/docs/create-a-new-react-app.html"
          target="#"
        >
          For more detailed information on React-App
        </a>
        <a href="https://nodejs.org/en/" target="#">
          For more detailed information on NodeJS
        </a>
      </div>
    </div>
  );
}

export default About;
