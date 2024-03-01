import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
     <Link className="hover:text-accent transition-all duration-300" href="">
        <FaGithub />
     </Link>
       <Link className="hover:text-accent transition-all duration-300" href="">
          <FaLinkedin />
     </Link>
       <Link className="hover:text-accent transition-all duration-300" href="">
     <FaInstagram />
     </Link>
    </div>
  )
}

export default Social
