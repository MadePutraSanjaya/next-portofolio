import React from 'react'
import Instagram from "/public/instagram.png"
import Image from "next/image"
import CardInfo from './CardInfo';

const CardInfo: React.FC<CardInfo> = ({img_url, title, subTitle, href}) => {
  return (
    <>
      <div className="flex">
        <div className="bg-bgInfo hover:bg-bgTransparent bgBorder transition ease-in-out hover:-translate-y-1 hover:scale-110 py-4 px-6 rounded-md ">
          <div className="flex flex-row gap-4 justify-center">
            <Image width={50} src={img_url} alt="" />
            <div className="content-center grid ">
              <p className="text-lg	font-medium">{title}</p>
              <a
                href={href}
                className="cursor-pointer text-gray-400"
                target="_blank"
              >
                {subTitle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInfo
