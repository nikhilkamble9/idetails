import React from "react";
import "./NpmNode.css";
function NpmNode() {
  return (
    <div className="NpmNode">
      <h1>Install NodeJS with npm</h1>
      <div className="instructionsfornode">
        <p className="para">
          Steps to Install NodeJS and npm. (when you install NodeJS, npm is
          installed automatically)
        </p>
        <div className="nodesteps">
          <p>
            1. Download the step file with given link.(Download the file
            Recommended for most users as it the most stable build){" "}
            <a href="https://nodejs.org/en/">NodeJS with npm</a>{" "}
            <a href="https://ibb.co/sF5jDxZ" target="#">
              Click to view Image
            </a>
          </p>
        </div>
        <div className="nodesteps">
          <p>
            2. Open the Setup file and wait for Next Button to get visible then
            click on next button.
          </p>{" "}
          <a className="nodeanchor" href="https://ibb.co/gvCKgh8" target="#">
            Click to view Image.
          </a>
        </div>
        <div className="nodesteps">
          <p>3. Click on I accept the terms and then next button.</p>{" "}
          <a className="nodeanchor" href="https://ibb.co/hc0M4Gg" target="#">
            Click to view Image.
          </a>
        </div>
        <div className="nodesteps">
          <p>
            4. Click on Next Button after selecting the path. (Recommend to let
            it be default path where operating system is installed)
          </p>{" "}
          <a className="nodeanchor" href="https://ibb.co/FgHp6dF" target="#">
            Click to view Image.
          </a>
        </div>
        <div className="nodesteps">
          <p>5. Check the image to see if all tabs are clicked.</p>{" "}
          <a className="nodeanchor" href="https://ibb.co/1742snH" target="#">
            Click to view Image.
          </a>
        </div>
        <div className="nodesteps">
          <p>
            6. Untick the the automatic install tab if ticked and then click
            next button.
          </p>{" "}
          <a className="nodeanchor" href="https://ibb.co/6NBtNZZ" target="#">
            Click to view Image.
          </a>
        </div>
        <div className="nodesteps">
          <p>
            7. Click on Install and wait for Installer to finish installing.
            (You can check the node version by typing <strong>node -v</strong>{" "}
            in cmd or Simply type <strong>Node</strong> in VS Code Terminal.)
          </p>{" "}
          <a className="nodeanchor" href="https://ibb.co/Wv2c35n" target="#">
            Click to view Image.
          </a>
        </div>
        <div className="nodesteps">
          <p>
            8. To check npm version simply type{" "}
            <strong>NPM -- version or NPM -v </strong> in cmd
          </p>
        </div>
      </div>
    </div>
  );
}

export default NpmNode;
