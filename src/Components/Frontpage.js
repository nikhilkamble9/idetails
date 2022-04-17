import React from "react";
import "./Frontpage.css";

function Frontpage() {
  return (
    <>
      <section className="firstsection">
        <div className="Frontpage">
          <h1>Install VS Code with extensions</h1>
          <div className="frontpagefirst">
            <p className="para">Steps to install are given below.</p>
            <div className="step">
              <p>1. Download the setup file from link given.</p>
              <a
                className="anchortag"
                href="https://code.visualstudio.com/"
                target="#"
              >
                VS Code
              </a>
            </div>
            <div className="step">
              <p>2. Open the setup file and click on I accept.</p>
              <a className="anchortag" href="https://ibb.co/27jhrwg" target="#">
                Click to view Image
              </a>
            </div>
            <div className="step">
              <p>3. Click on following tabs</p>
              <a className="anchortag" href="https://ibb.co/jJf8p0D" target="#">
                Click to view Image
              </a>
            </div>
            <div className="step">
              <p>
                4. Click on Install and wait for program to finish installing.
              </p>
              <a className="anchortag" href="https://ibb.co/DYYx70R" target="#">
                Click to view Image
              </a>
            </div>
          </div>
          <div className="pythonextension">
            <h2>Extension which are helpful in VS code</h2>
            <p>
              Extensions link are provided to help you see that you download the
              exact one.
            </p>
            <ul className="extensions">
              <li className="listtag">
                Python ---
                <a
                  className="anchorextension"
                  href="https://marketplace.visualstudio.com/items?itemName=ms-python.python"
                  target="#"
                >
                  Microsoft
                </a>
              </li>
              <li className="listtag">
                [Deprecated] Bracket Pair Colorizer 2 ---
                <a
                  className="anchorextension"
                  href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"
                  target="#"
                >
                  CoenraadS
                </a>
              </li>
              <li className="listtag">
                [Deprecated] Debugger for Chrome ---
                <a
                  className="anchorextension"
                  href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome"
                  target="#"
                >
                  Microsoft
                </a>
              </li>
              <li className="listtag">
                C/C++ ---
                <a
                  className="anchorextension"
                  href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"
                  target="#"
                >
                  Microsoft
                </a>
              </li>
              <li className="listtag">
                Prettier - Code formatter ---
                <a
                  className="anchorextension"
                  href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                  target="#"
                >
                  Prettier
                </a>
              </li>
              <li className="listtag">
                Live Server ---
                <a
                  className="anchorextension"
                  href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
                  target="#"
                >
                  Ritwick Dey
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Frontpage;
