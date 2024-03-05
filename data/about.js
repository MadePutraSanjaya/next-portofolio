import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaFigma,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiNextdotjs, SiNestjs } from "react-icons/si";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front End Development",
        icons: (
          <div className="flex gap-x-4">
            <FaHtml5 />
            <FaCss3Alt />
            <FaReact />
            <FaVuejs />
            <IoLogoJavascript />
            <SiTypescript />
            <SiNextdotjs />
          </div>
        ),
        key: "front-end",
      },
      {
        title: "Back End Development",
        icons: (
          <div className="flex gap-x-4">
            <FaNodeJs />
            <FaLaravel />
            <FaPhp />
            <SiNestjs />
          </div>
        ),
        key: "back-end",
      },
      {
        title: "UI/UX Design",
        icons: (
          <div className="flex gap-x-4">
            <FaFigma />
          </div>
        ),
        key: "ui/ux",
      },
    ],
  },
  {
    title: "experiences",
    info: [
      {
        name: "PT Taksu Teknologi Indonesia",
        position: "Software Engineer",
        started: "Feb 2024 - Current",
        link: "https://www.taksu.tech/",
        img_url: require("/public/taksu.png"),
      },
      {
        name: "PT. Vanz Inovatif Teknologi",
        position: "Full Stack Developer",
        started: "Aug 2023 - Dec 2023",
        link: "https://qbit.co.id/",
        img_url: require("/public/qbit.png"),
      },
      {
        name: "PT. GuestPro Teknologi Indonesia",
        position: "Software Engineer",
        started: "Oct 2021 - Apr 2022 ",
        link: "https://www.guestpro.id/",
        img_url: require("/public/guestpro.png"),
      },
    ],
  },
  {
    title: "educations",
    info: [
      {
        school: "SMP NEGERI 2 BLAHBATUH",
        years: "2017 - 2019",
        section: "",
      },
      {
        school: "SMK NEGERI 1 GIANYAR",
        years: "2020 - 2023",
        section: "Software Engineer",
      },
      {
        school: "INSTITUT BISNIS DAN TEKNOLOGI INDONESIA",
        years: "2023 - 2027",
        section: "Bachelor of Computer Science",
      },
    ],
  },
  {
    title: "organization",
    info: [
      {
        period_organization: "Junior High School",
        info: ["Student Council - Information and Communication"],
      },
      {
        period_organization: "Vocational High School",
        info: [
          "Student Council - Information and Communication",
          "Cricket Organization",
        ],
      },
      {
        period_organization: "Slukat Learning Center",
        info: [
          "Slukat Student Organization",
          "Organization of  Informatics Engineering",
        ],
      },
    ],
  },
];
