import React from "react";
import Image from "next/image";
import AboutImg from "/public/about-img.png";
import Experience from "./Experience";

const About = () => {
  return (
    <div className="bg-bgSection" id="about">
      <div className="section container mx-auto">
        <div className="columns-2">
          <div className="relative">
            <Image
              height={570}
              width={500}
              src={AboutImg}
              alt="Made Sanjaya"
              className="rounded-lg"
            />

            <div className="absolute top-64 left-96">
              <div
                className="grid text-center p-6 rounded-xl animate-bounce"
                style={ButtonBlur}
              >
                <p className="text-primary font-semibold text-3xl">30+</p>
                <p className="font-extrabold">Notable Project</p>
              </div>
            </div>
          </div>

          <div className="grid relative top-24">
            <p className="text-primary font-semibold">About Me</p>
            <h2 className="my-6 font-bold text-3xl">
              I’m Made Sanjaya, A Front End Developer Based In Bali{" "}
            </h2>
            <p className="text-gray-400 mb-6">
              I’m just happy to see how the code I have made turns into the look
              I want, it to be a matter of pride for me. I have curiosity and
              keep learn about technology and I hope to be a great front end
              developer in future.
            </p>

            <Experience />

            <div>
              <button
                className="bg-buttonPrimary button-primary"
                style={ButtonPrimary}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const ButtonPrimary: React.CSSProperties = {
  background: "#4DB5FF",
  border: "transparent",
  fontWeight: "600",
  borderRadius: "8px",
  position: "relative",
  boxShadow: "0",
  overflow: "hidden",
  transition: "0.5s",
  display: "block",
  padding: "10px 15px",
  color: "#101D30",
  fontSize: "14px",
};

const ButtonBlur: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.12)",
  backdropFilter: "blur(4px)",
};
