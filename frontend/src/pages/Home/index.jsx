import React from "react";
import "./styles.css";

import UnauthenticatedTopBar from "../../components/UnauthenticatedTopBar";
import HomeInfo from "../../components/HomeInfo";

function Home() {
  return (
    <div className="home-wrapper">
      <UnauthenticatedTopBar />
      <HomeInfo />
    </div>
  );
}

export default Home;
