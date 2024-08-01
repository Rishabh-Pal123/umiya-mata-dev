import * as React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className='bg-[#bc2e30] sm:p-4 p-2 w-full flex flex-col md:flex-row items-center justify-between'>
        <div className='text-white font-bold'>2023 © All rights reserved by Umiyamataji</div>
        <div className='flex space-x-2 md:space-x-4'>
            <div className='rounded-[100%] border border-white text-white p-2 cursor-pointer hover:bg-gray-100 hover:text-black' href="#"><FaFacebookF/></div>
            <div className='rounded-[100%] border border-white text-white p-2 cursor-pointer hover:bg-gray-100 hover:text-black' href="#"><FaXTwitter/></div>
        </div>
    </div>
  )
}
