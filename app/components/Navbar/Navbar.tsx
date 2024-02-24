"use client";

import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "/public/logo.png";
import Image from "next/image";
import NavItems from "./NavItems";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Experience", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Portofolio", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  
  return (
    <Disclosure as="nav" className="bg-color absolute right-0 left-0 top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-9 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo */}
                <Image className="h-8 w-auto" src={Logo} alt="Your Company" />
              </div>

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden ">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Menu items */}
              <NavItems />

              {/* Button */}
              <div className="hidden ml-auto md:block">
                <button className="text-white button-primary">tes item</button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Transition
            show={open}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
          >
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
