import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Social from '../Social/Social';


const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-y-6 py-4">
            <Link href="/">
              <Image src="/logo.png" width={60} height={60} alt="Made Sanjaya's Logo" priority={true} />
            </Link>
              <Social />
        </div>
      </div>
  </header>
  )
}

export default Header
