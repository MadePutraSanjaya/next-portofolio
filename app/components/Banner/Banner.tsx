"use client";

import React from "react";
import Image from "next/image";
import Profile from "/public/profile.png";
import CTA from '../CTA/CTA';
import CardInfo from '../Cards/CardInfo/CardInfo';
import Instagram from '/public/instagram.png'
import Linkedin from '/public/linkedin.png'
import Github from '/public/github.png'

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
              <CTA className="button-primary">Hire Me</CTA>
            </div>
            <div className="">
              <CTA className="button-primary-outline">Download CV</CTA>
            </div>
          </div>
        </div>

        <div className="image-profile">
          <Image src={Profile} alt="Made Sanjaya" />
        </div>
      </div>

      <div className="flex gap-9 justify-center">
        <CardInfo
          title="Github"
          subTitle="See My Work"
          img_url={Github}
          href="https://github.com/MadePutraSanjaya"
        />
        <CardInfo
          title="Linkedin"
          subTitle="See My Work"
          img_url={Linkedin}
          href="https://www.linkedin.com/in/madesanjaya/"
        />
        <CardInfo
          title="Instagram"
          subTitle="Contact Me"
          img_url={Instagram}
          href="https://www.instagram.com/mdsanjaya._/"
        />
      </div>
    </>
  );
}

export default Banner

