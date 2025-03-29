import React from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home({ sidbar }) {
  return (
    <>
      <Sidebar sidbar={sidbar} />
    </>
  );
}

export default Home;
