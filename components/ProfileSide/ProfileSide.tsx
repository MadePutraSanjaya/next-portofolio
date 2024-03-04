import React from 'react'
import Image from "next/image"


const ProfileSide = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none -z-50">
      <Image src='/side-profile.png' width="500" height="500" alt="Made Sanjaya" className="translate-z-0 -z-50 " />
    </div>
  )
}

export default ProfileSide
