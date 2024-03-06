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
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });


  const openModal = (content: any) => {
    setModalContent(content);
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
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]" onClick={() => openModal(image)}>
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
   {showModal && modalContent && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-screen-sm sm:w-full mx-auto">
              <div className="bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Icon */}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-white" id="modal-title">
                      {modalContent.title}
                    </h3>
                    <div className="mt-2">
                      <div className=" text-white" dangerouslySetInnerHTML={{ __html: modalContent.description }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" onClick={closeModal} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      </>
    
  );
};

export default Slider;
