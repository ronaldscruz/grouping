import React from "react";
import "./styles.css";

import UnauthenticatedTopBar from "../../components/UnauthenticatedTopBar";
import HomeWelcome from "./HomeWelcome";

function Home() {
  return (
    <div className="home-wrapper">
      <UnauthenticatedTopBar />
      <HomeWelcome />
    </div>
  );
}

export default Home;
