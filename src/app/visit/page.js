'use client'
import * as React from 'react';
import PageBanner from '../Components/PageBanner';
import Image from 'next/image'
import { location } from '../globalvar';
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });
const Page = () => {
  const position = [51.505, -0.09]
  return (
    <div className='min-h-[90vh]'>
      <PageBanner title={"Visit Us"} />
      <div className='flex lg:p-16 p-4  flex-col-reverse lg:flex-row justify-center space-y-4 lg:space-y-0'>
        <Map />
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

      <div className='lg:w-[82%] w-[98%] mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-4 space-y-4 space-x-2 mb-10'>
        <h1 className='text-[#bc2e30] text-xl font-bold'>Visitor Guidelines</h1>
        <ul className='space-y-2 list-disc text-justify'>
          <li>Wear modest clothing that covers shoulders, knees, and ideally the midriff. Traditional attire like sarees, kurtas, or salwar kameez for women and dhotis, kurtas, or shirts and pants for men are often appreciated.</li>
          <li>It is customary to remove shoes and any other footwear before entering the temple premises. Most temples provide a designated area for storing shoes.</li>
          <li>Temples are places of worship and reflection. Maintain a respectful demeanor by speaking softly, refraining from loud conversations, and not using mobile phones or other electronic devices.</li>
          <li>Participate respectfully in rituals, such as offering prayers, lighting lamps, or receiving blessings. Follow the instructions given by the temple staff or signs and avoid touching idols or sacred objects unless permitted.</li>
          <li>If you wish to make offerings or donations, do so respectfully and according to the temple&apos;s customs. It is common to offer flowers, fruits, or money. Make sure your offerings are clean and appropriate.</li>
        </ul>
      </div>


    </div>
  )
}

export default Page