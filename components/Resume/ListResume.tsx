import React from "react";
import { ResumeData } from "../../data/resume.js";
import Image from "next/image";
import Link from "next/link";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const ListResume = () => {
  return (
    <div className="inline-block grid grid-cols-2 gap-x-20 gap-y-4 mt-4">
      {ResumeData.map((r) => (
        <div className="flex mt-4 gap-4 border-b border-gray-400" key={r["id"]}>
          <Image
            src={r.img_url}
            alt={r["name"]}
            width={50}
            height={50}
            className="mb-4"
          />
          <div className=" ">
            <div className="flex justify-between gap-16 w-96 w-4">
              <p className="font-bold">{r["name"]}</p>
              <Link href={r["link"]} target="_blank">
                <ArrowTrendingUpIcon class="h-4 w-4 text-gray-500" />
              </Link>
            </div>
            <div className="flex justify-between gap-16 w-96 w-4">
              <p className="text-gray-400 text-xs">{r["position"]}</p>
              <p className="text-gray-400 text-xs">{r["started"]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListResume;
