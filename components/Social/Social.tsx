import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
     <Link className="hover:text-accent transition-all duration-300" href="https://github.com/MadePutraSanjaya">
        <FaGithub />
     </Link>
       <Link className="hover:text-accent transition-all duration-300" href="https://www.linkedin.com/in/madesanjaya/">
          <FaLinkedin />
     </Link>
       <Link className="hover:text-accent transition-all duration-300" href="https://www.instagram.com/mdsanjaya._/">
     <FaInstagram />
     </Link>
    </div>
  )
}

export default Social
