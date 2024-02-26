import React from "react";
import { ResumeData } from "../../data/resume.js";
import Image from "next/image";

const ListResume = () => {
  return (
    <div className="flex gap-4 justify-center mt-12">
      {ResumeData.map((r) => (
        <div className="flex" key={r["id"]}>
          <Image src={r.img_url} alt={r["name"]} width={50} height={50} />
          <div className="grid">
            <p>{r["name"]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListResume;
