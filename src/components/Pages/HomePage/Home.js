import React from "react";
import MainSection from "../../MainSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <MainSection {...homeObjOne} />
      <MainSection {...homeObjTwo} />
      <MainSection {...homeObjThree} />
    </>
  );
};

export default Home;
