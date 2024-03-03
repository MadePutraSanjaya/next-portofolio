import React from "react";

import SideProfile from "../../components/ProfileSide/ProfileSide";
import Circles from "../../components/Circles/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const About = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
    
      <div
        // variants={fadeIn("right", 0.2)}
        // initial="hidden"
        // animate="show"
        // exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <SideProfile />
      </div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        text
        <div>
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          </div> 
          
          </div> 
      </div>
    </div>
  );
};

export default About;
