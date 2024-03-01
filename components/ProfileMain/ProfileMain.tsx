import React from 'react'
import Image from "next/image"


const ProfileMain = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image src='/profile-main.png' width="500" height="500" alt="Made Sanjaya" className="translate-z-0 " />
    </div>
  )
}

export default ProfileMain
