import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavItems = () => {
  const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Experience", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Portofolio", href: "#", current: false },
];

  return (
    <>
      <div className="hidden ml-auto md:block transition ease-in-out delay-150 ">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

     
    </>
  );
};

export default NavItems;
