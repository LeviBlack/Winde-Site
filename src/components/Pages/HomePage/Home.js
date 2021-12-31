import React from "react";
import MainSection from "../../MainSection";
import { homeObjOne } from "./Data";

const Home = () => {
  return (
    <>
      <MainSection {...homeObjOne} />
    </>
  );
};

export default Home;
