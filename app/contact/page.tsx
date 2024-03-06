"use client";

import React, {useEffect, useRef, useState} from 'react'
import { motion } from "framer-motion"
import { fadeIn } from "../../variant"
import { RiSendPlane2Fill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
 const emailRef = useRef<HTMLInputElement>(null);
 const nameRef = useRef<HTMLInputElement>(null);
 const subjectRef = useRef<HTMLInputElement>(null);
 const messageRef = useRef<HTMLTextAreaElement>(null);
 const formRef = useRef<HTMLFormElement>(null);
 const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("zuBynHZamUUqjsbah"), []);

     const handleSubmit = async (e: any) => {
    e.preventDefault();
    const serviceId = "service_v2b23a6";
    const templateId = "template_b8muu1m";
    try {
      setLoading(true);
     await emailjs.send(serviceId, templateId, {
       name: nameRef?.current?.value ?? "",
       recipient: emailRef?.current?.value ?? "",
       subject: subjectRef?.current?.value ?? "",
       message: messageRef?.current?.value ?? "",
     });

     Swal.fire({
       title: "Your email has been sent!",
       text: "Wait for the response, OK!",
       icon: "success",
     });
    formRef.current?.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center h2 mb-12"
          >
            Let’s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
             variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                className="input capitalize"
                ref={nameRef}
                type="text"
                required
                placeholder="Name"
              />
              <input
                className="input"
                ref={emailRef}
                type="text"
                required
                placeholder="Email"
              />
            </div>
            <input
              className="input capitalize"
              ref={subjectRef}
              type="text"
              required
              placeholder="Subject"
            />

            <textarea
              className="textarea"
              ref={messageRef}
              placeholder="Message"
              required
            ></textarea>
            <button className="btn rounded-full bg-accent max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let’s
              </span>
              <RiSendPlane2Fill className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact
