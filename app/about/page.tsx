"use client";
import React, { useState } from "react";
import SideProfile from "../../components/ProfileSide/ProfileSide";
import Circles from "../../components/Circles/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import { aboutData } from "../../data/about";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[240px]"
      >
        <SideProfile />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs code.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I’m just happy to see how the code I have made turns into the look I
            want, it to be a matter of pride for me. I have curiosity and keep
            learn about technology and I hope to be a great front end developer
            in future.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="font-bold text-white/70 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experiences
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />+
                </div>
                <div className="font-bold text-white/70 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  SATISFIED CLIENTS
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={5} />+
                </div>
                <div className="font-bold text-white/70 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  FINISHED PROJECTS
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-2 overflow-x-scroll w-96 xl:overflow-hidden md:w-auto pb-4 xl:pb-auto xl:w-max">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer uppercase xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 font-bold`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* skills */}
                  {"title" in item && item.title !== null && (
                    <>
                      <div className="font-light mb-2 md:mb-0">
                        {item.title}
                      </div>
                      <div className="hidden md:flex">-</div>
                      <div className="flex gap-x-4">
                        {"icons" in item && (
                          <div key={itemIndex} className="text-2xl text-white">
                            {(item as any).icons}
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* experience */}
                  {"name" in item && item.name !== null && (
                    <>
                      <div className="grid grid-cols-2 gap-x-20 border-b border-gray-400 justify-center max-w-[75%] xl:max-w-[90%] md:max-w-[50%] xl:mx-0 mx-auto">
                        <div className="flex my-4 gap-4">
                          <Image
                            src={item.img_url}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="mb-4"
                          />
                          <div className="grid justify-center items-center h-full">
                            <div className="flex justify-between gap-16 w-[26rem] h-full">
                              <p className="font-bold text-white">
                                {item.name}
                              </p>
                              <Link href={item.link} target="_blank">
                                <FaArrowTrendUp className="h-4 w-4 text-gray-500" />
                              </Link>
                            </div>
                            <div className="flex justify-between gap-16 w-[26rem] h-full">
                              <p className="text-gray-400 text-xs">
                                {item.position}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {item.started}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* educations */}
                  {"school" in item && item.school !== null && (
                    <>
                      <div className="border-b border-gray-400">
                        <div className="flex gap-4 my-4">
                          <div className="grid items-center h-full xl:w-[36rem] w-[30rem]">
                            <p className="text-white font-bold">
                              {item.school}
                            </p>
                            <p className="text-gray-400 text-md font-semibold">
                              {item.years}
                            </p>
                            <p className="text-gray-400 text-md font-normal">
                              {item.section}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* organization */}
                  {"period_organization" in item &&
                    item.period_organization !== null && (
                      <>
                        <ul className="xl:list-disc list-none mx-2">
                          <li className="text-white font-semibold xl:mt-0 mt-4">
                            {item.period_organization}
                          </li>

                          <ol className="xl:list-decimal list-none list-inside">
                            {item.info.map((infoItem, infoIndex) => (
                              <li key={infoIndex}>{infoItem}</li>
                            ))}
                          </ol>
                        </ul>
                      </>
                    )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
