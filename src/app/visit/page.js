import * as React from 'react';
import PageBanner from '../Components/PageBanner';
import Image from 'next/image'
import { location } from '../globalvar';
import { FaLocationDot } from "react-icons/fa6";


const Page = () => {
  return (
    <div className='min-h-[90vh]'>
      <PageBanner title={"Visit Us"} />
      <div className='flex md:p-16 p-4 flex-col border md:flex-row justify-center space-y-4 md:space-y-0'>
        <div className='relative lg:w-[40%] w-full h-[400px]'>
          <Image className='z-[1]' src="/images/mandir.jpg" fill></Image>
        </div>
        <div className='border bg-white lg:w-[40%] w-full'>
          <div className='space-y-1 border-b border-[#bc2e30] p-4'>
            <h1 className='text-[#bc2e30] text-lg font-bold'>Address</h1>
            <div>{location}</div>
            <div><a target="_blank" className='hover:text-[#bc2e30] font-bold cursor-pointer flex space-x-2 items-center'><span><FaLocationDot /></span><span>Get Direction</span></a></div>
          </div>
          <div className='space-y-2 border-b border-[#bc2e30] p-4'>
            <h1 className='text-[#bc2e30] text-lg font-bold'>Opening and Closing Time</h1>
            <p>9:00 AM to 10:00 PM</p>
            <p>Opens 7 Days</p>
          </div>
          <div className='space-y-2 p-4'>
            <h1 className='text-[#bc2e30] text-lg font-bold'>Aarti Time</h1>
            <p>Morning: 9:00AM</p>
            <p>Afternoon: 11:30AM</p>
            <p>Evening: 6:00PM</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page