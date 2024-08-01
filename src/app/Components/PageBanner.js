import * as React from 'react';

const PageBanner = ({title}) => {
  return (
    <div className='w-full h-[40vh] bg-[#bc2e30] text-white font-bold items-center flex justify-center'>
        <p className='md:text-4xl sm:text-3xl text-2xl'>{title}</p>
    </div>
  )
}

export default PageBanner;