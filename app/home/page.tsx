"use client";

import React from "react";
import Image from "next/image";
import ParticlesContainer from "../../components/ParticlesContainer/ParticlesContainer";
import ProjectBtn from "../../components/ProjectBtn/ProjectBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant.js";
import { ReactTyped } from "react-typed";
import ProfileMain from "../../components/ProfileMain/ProfileMain";

const Home = () => {
  return (
    <div className="overflow-x-hidden xl:py-0 md:py-32 py-32 bg-primary/60 h-screen w-screen">
      <div className="w-full h-full xl:bg-gradient-to-r xl:from-primary/10 xl:via-black/30 xl:to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hello, I’m Made Sanjaya <br />
            <span className="text-accent">
              <ReactTyped
                strings={[
                  "Front End Developer",
                  "Web Design",
                  "Software Engineer",
                ]}
                typeSpeed={50}
                loop
                backSpeed={20}
                showCursor={true}
              />
            </span>{" "}
            <br />
            Based In Bali
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            A Passionate Front End Developer With More 2 Years Of Experience Who
            Is Always Excited to work with you to creating wonderful Website
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        <ParticlesContainer id="tsparticles" />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 lg:bottom-0 lg:-right-[8%]"
        >
          <ProfileMain />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
