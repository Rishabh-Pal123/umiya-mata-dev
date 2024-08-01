import * as React from 'react';
import { email,phoneNumber } from '../globalvar';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

export const ContactNavbar = () => {
  return (
    <div className='w-full h-full flex items-center justify-between bg-[#bc2e30] sm:p-6 p-2'>
        <div className='flex md:flex-row flex-col md:space-x-4 text-white'>
            <div className='font-bold flex items-center space-x-2'><span><FaPhoneAlt/></span> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></div>
            <div className='font-bold flex items-center space-x-2'><span><MdEmail/></span> <a href={`mailto:${email}`}>{email}</a></div>
        </div>

        <div className=''>
            <Link href={"/donate"} className='p-4 px-10 bg-yellow-600 text-white rounded-lg'>Donate</Link>
        </div>
    </div>
  )
}
