"use client";

import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import { Pagination } from "swiper/modules";

import { ProjectData } from "../../data/project";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Slider = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <>
    <Swiper
      spaceBetween={10}
       pagination={{clickable: true,}} 
       modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {ProjectData.slides && ProjectData.slides.map((item, itemIndex) => (
        <SwiperSlide key={itemIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {item.images && item.images.map((image, index) => {
              return (
                <div
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  key={index}
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image src={image.path} width={500} height={200} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent to-[#ff6b6d] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 translation-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]" onClick={openModal}>
                        <div className="delay-300">SHOW</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          DETAIL
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* // modal */}
     {showModal && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 overflow-y-auto ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <div className="relative max-w-2xl p-4 mx-auto">
          {/* Modal content */}
          <div className={`relative bg-white rounded-lg shadow-lg transition-opacity transform ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Terms of Service
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={closeModal}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={closeModal}>I accept</button>
              <button type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={closeModal}>Decline</button>
            </div>
          </div>
        </div>
      </div>
      )}

      </>
    
  );
};

export default Slider;
