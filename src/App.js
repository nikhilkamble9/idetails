import "./App.css";
import Frontpage from "./Components/Frontpage";
import Navbar from "./Components/Navbar";
// import React, { useState } from "react";
import InstallGit from "./Components/InstallGit";
import InstallReact from "./Components/InstallReact";
import NpmNode from "./Components/NpmNode";
import About from "./Components/About";

function App() {
  // const [nav, setnav] = useState(false);
  // const newnav = () => {
  //   if (window.scrollY >= 50) {
  //     setnav(true);
  //   } else {
  //     setnav(false);
  //   }
  // };
  // window.addEventListener("scroll", newnav);
  return (
    <div className="App">
      <Navbar />
      <Frontpage />
      <InstallGit />
      <InstallReact />
      <NpmNode />
      <About />
    </div>
  );
}

export default App;
