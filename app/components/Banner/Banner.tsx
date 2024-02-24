"use client";

import React from "react";
import Image from "next/image";
import Profile from "/public/profile.png";
import CTA from '../CTA/CTA';
import CardInfo from '../Cards/CardInfo/CardInfo';

const Banner: React.FC = () => {
  return (
    <>
    <div className="columns-2">
      <div className="text-banner relative top-32 lg:top-40">
        <h1 className="text-3xl font-semibold mb-4 w-4/5">
          Hello, I’m Made Sanjaya Front End Developer Based In Bali{" "}
        </h1>
        <p className="text-sm font-regular text-gray-500">
          A Passionate Front End Developer With More 2 Years Of Experience Who
          Is Always Excited to work with you to creating wonderful Website
        </p>
        <div className="flex flex-row mt-9 gap-4">
          <div className="">
            <CTA className="button-primary"> 
               Hire Me
            </CTA>
          </div>
          <div className="">
              <CTA className="button-primary-outline"> 
               Download CV
            </CTA>
          </div>
        </div>
      </div>

      <div className="image-profile">
        <Image src={Profile} alt="Made Sanjaya" />
      </div>

    <div className="flex flex-row gap-4">
    <CardInfo />
    </div>
    </>
  );
}

export default Banner

