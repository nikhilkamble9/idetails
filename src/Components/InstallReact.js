import React from "react";
import "./InstallReact.css";
function InstallReact() {
  return (
    <div className="InstallReact">
      <h1>Install React App</h1>
      <div className="reactsteps">
        <p className="para">Steps to install are given below.</p>
      </div>
      <div className="create">
        <p>
          To create a react app (React app version is always updating so it is
          recommended not to install it globally.)
        </p>
        <p className="step2">
          <strong>1. npx create-react-app my-app</strong>
          (In new version of react app, it doesn't support capitalized words
          recommended to use lower case.)
        </p>
        <p className="step2">
          <strong>2. cd my-app</strong>
        </p>
        <p className="step2">
          <strong>3. npm start</strong>
        </p>
      </div>
    </div>
  );
}

export default InstallReact;
