import { HiHome, HiUserCircle} from "react-icons/hi";
import { IoCloudDone } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";


export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUserCircle /> },
  // { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <IoCloudDone /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
