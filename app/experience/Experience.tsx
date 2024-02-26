import React from "react";
import FrontEnd, {BackEnd} from './ItemsExperience';


const Experience = () => {
  return (
    <>
      <div className="section container mx-auto">
        <div className="grid text-center">
          <p className="text-3xl my-4">My Experience</p>
          <p className="text-gray-400 mb-14">
            Technology that I have used in development
          </p>
        </div>
        <div className="columns-2">
          <div className="bg-bgSection hover:bg-bgTransparent bgBorder transition ease-in-out rounded-xl">
            <div className="front-end p-9 ">
              <p className="font-bold text-center">Front End Development</p>
                <FrontEnd />
              </div>
          </div>

          <div className="bg-bgSection hover:bg-bgTransparent bgBorder transition ease-in-out rounded-xl">
            <div className="back-end p-9 ">
              <p className="font-bold text-center">Back End Development</p>
              <BackEnd />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
