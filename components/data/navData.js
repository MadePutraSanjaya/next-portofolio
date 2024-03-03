import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export const navData = [
  { name: "home", path: "/", icon: <HomeIcon className="h-5 w-5" /> },
  { name: "about", path: "/about", icon: <UserIcon className="h-5 w-5" /> },
  // { name: "services", path: "/services", icon: <HiRectangleGroup className="h-5 w-5" /> },
  { name: "work", path: "/work", icon: <BriefcaseIcon className="h-5 w-5" /> },
  {
    name: "contact",
    path: "/contact",
    icon: <EnvelopeIcon className="h-5 w-5" />,
  },
];
