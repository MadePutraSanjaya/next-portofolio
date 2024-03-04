import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ProjectBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href="/about" className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStart bg-cover bg-center bg-no-repeat group">
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt="image rounded"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <ArrowRightIcon className="h-6 w-6 absolute text-4xl group-hover:translate-x-2 transition-all duration-600" />

      </Link>
    </div>
  );
}

export default ProjectBtn
