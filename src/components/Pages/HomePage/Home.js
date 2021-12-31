import React from "react";
import MainSection from "../../MainSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "./Data";
import Pricing from "../../Pricing";

const Home = () => {
  return (
    <>
      <MainSection {...homeObjOne} />
      <MainSection {...homeObjTwo} />
      <MainSection {...homeObjThree} />
      <Pricing />
    </>
  );
};

export default Home;
