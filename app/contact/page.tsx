"use client";

import React, { useEffect, useRef, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import { RiSendPlane2Fill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  
  const serviceId = "service_v2b23a6";
  const templateId = "template_b8muu1m";
  const userId = "qpqpeuf4fPIXLul0U";

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const currentForm = form.current;
      if (currentForm) {
        await emailjs.sendForm(serviceId, templateId, currentForm, userId);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "The form is empty, try fill it out first",
        });
      }

      Swal.fire({
        title: "Your email has been sent!",
        text: "Wait for the response, OK!",
        icon: "success",
      });
      form.current?.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-primary/30">
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
            ref={form}
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
                type="text"
                required
                id=""
                name="name"
                placeholder="Name"
              />
              <input
                className="input"
                type="text"
                required
                id=""
                name="recipient"
                placeholder="Email"
              />
            </div>
            <input
              className="input capitalize"
              type="text"
              required
              id=""
              name="subject"
              placeholder="Subject"
            />

            <textarea
              className="textarea"
              placeholder="Message"
              required
              id=""
              name="message"
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
};

export default Contact;
