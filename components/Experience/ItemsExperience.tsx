import React from "react";
import DataExperience from "../../data/experience.json";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const FrontEnd = () => {
  const frontEnd = DataExperience["frontEnd"];
  return (
    <div className=" flex-row flex flex-wrap gap-4 max-w-96 justify-between">
      {frontEnd.map((f) => (
        <div className="flex gap-2 mt-6" key={f["id"]}>
          <CheckBadgeIcon class="h-4 w-4 mt-1 text-white bg-blue-800 rounded-full" />
          <div className="grid">
            <p className="font-bold"> {f["name"]} </p>
            <p className="font-semibold text-xs text-gray-400">
              {" "}
              {f["level"]}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrontEnd;

export const BackEnd = () => {
  const backEnd = DataExperience["backEnd"];

    return (
      <div className=" flex-row flex flex-wrap gap-4 max-w-72 justify-between">
        {backEnd.map((f) => (
          <div className="flex gap-2 mt-6" key={f["id"]}>
            <CheckBadgeIcon class="h-4 w-4 mt-1 text-white bg-blue-800 rounded-full" />
            <div className="grid">
              <p className="font-bold"> {f["name"]} </p>
              <p className="font-semibold text-xs text-gray-400">
                {" "}
                {f["level"]}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
}
