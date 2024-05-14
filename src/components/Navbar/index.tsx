import React from 'react'
import Image from 'next/image'

import logo from "@/public/images/home/logo.png"
const Navbar = () => {
  return (
    <div className='flex justify-center relative z-10'>
        <div className="max-w-[1440px] w-full pl-[5%] pt-[30px] mob:flex mob:justify-center mob:pl-0 ">
            <Image className='' src={logo} alt="" width={300.19} height={159.77} />
        </div>
    </div>
  )
}

export default Navbar
