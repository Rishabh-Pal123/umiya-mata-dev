import * as React from 'react';
import PageBanner from '../Components/PageBanner';
import Image from 'next/image';
import { about } from '../globalvar';

const Page = () => {
  return (
    <div className='min-h-[90vh]'>
      <PageBanner title={"About Us"} />
      {
        /* Here we would write code for the temple History */
      }
      <div className='flex flex-col lg:flex-row p-4 justify-center lg:p-8 w-full lg:space-x-8 space-y-4 lg:space-y-0'>
        <div className='border-2 p-4 w-full lg:w-[40%] lg:aspect-auto aspect-square hover:border-[#bc2e30]'>
          <div className='relative w-full h-full'>
            <Image src={"/images/mandir.jpg"} fill ></Image>
          </div>
        </div>
        <div className='text-justify lg:w-[60%] w-full space-y-2'>
          <h1 className='md:text-2xl text-xl text-[#bc2e30] font-bold'>History of Umiya Mata Temple</h1>
          <p>
            {about}
          </p>
        </div>


      </div>

      {
        /* Mission and Vision */
      }

      <div className='lg:p-8 p-4 bg-white w-full h-full'>
        <div className="mx-auto h-full">
          <div className="text-center mb-6">
            <h2 className="md:text-3xl text-2xl font-bold mb-4 text-[#bc2e30]">Our Mission & Vision</h2>
          </div>
          <div className="flex h-full flex-col md:flex-row md:space-x-6 justify-center">
            <div className="w-full md:w-[48%] h-full aspect-auto mb-8 md:mb-0">
              <div className="bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:p-8 p-4">
                <h3 className="md:text-2xl text-xl font-semibold mb-4 text-[#bc2e30]">Mission</h3>
                <p className="text-gray-700 text-justify">
                  Our mission is to empower individuals and organizations through innovative and accessible technology solutions. We aim to bridge the digital divide by providing products and services that enhance productivity, creativity, and sustainable growth. We prioritize excellence, integrity, and inclusivity, ensuring that our technology benefits everyone, regardless of background or ability.
                  We are committed to using technology as a force for good. By addressing real-world challenges, from improving business operations to enhancing daily life, we create solutions that positively impact society. Our focus on user experience, data security, and ethical practices ensures that our innovations are not only effective but also responsible. We strive to build a community where technology is a catalyst for positive change, fostering a better future for all.
                </p>
              </div>
            </div>
            <div className="w-full h-full md:w-[48%] aspect-auto">
              <div className="bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  lg:p-8 p-4">
                <h3 className="md:text-2xl text-xl font-semibold mb-4 text-[#bc2e30]">Vision</h3>
                <p className="text-gray-700 text-justify">
                  Our vision is to be a global leader in technology, driving a future where innovation and inclusivity go hand in hand. We envision a world where technology seamlessly integrates into every aspect of life, enhancing human potential and fostering a more connected, equitable society. Our goal is to create a digital ecosystem that empowers individuals and businesses to thrive, regardless of their circumstances.
                  We aspire to set new standards in the industry by continuously pushing the boundaries of what technology can achieve. Our vision includes a commitment to sustainable practices and a focus on developing solutions that not only solve today's problems but also anticipate tomorrow's needs. By embracing diversity, fostering creativity, and promoting ethical innovation, we aim to inspire a new generation of thinkers, makers, and leaders who will shape the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row p-4 justify-center lg:p-8 w-full lg:space-x-8 space-y-4 lg:space-y-0'>
        <div className='border-2 p-4 w-full lg:w-[40%] lg:aspect-auto aspect-square hover:border-[#bc2e30]'>
          <div className='relative w-full h-full'>
            <Image src={"/images/umiyamata.jpg"} fill ></Image>
          </div>
        </div>
        <div className='text-justify lg:w-[60%] w-full space-y-2'>
          <h1 className='md:text-2xl text-xl text-[#bc2e30] font-bold'>Umiya Mata</h1>
          <p>
            For the creation of the universe the Shiv element brought forth the Sati. Sati took birth at the house of Daksh Prajapati. She married lord Shiva. Daksha organized a huge Yagna, and to spite Shiva, did not invite him. Sati still went to that Yagna at her fathers without invitation. She and lord Shiva were insulted again and unable to bear that Sati jumped into the Yagna pyre and embraced fire. Lord Shiva became very angry and carrying the body of Sati on his shoulders, he started the Tandav. The entire world shook and panicked. To save the world, Lord Vishnu cut the body of Sati into 51 parts with his Sudarshan Chakra and wherever these parts fell, a Shaktipeeth was establishd.
            Before jumping into the Yagna pyre, Sati had wished to marry lord Shiva in the next birth also. After the death of Sati Lord Shiva became a hermit. The Tarkasur demon was terrorizing the world. He got the boon from Brahmaji that he can be killed only by the son of Shiva. Gods got Lord Shiva ready to remarry. Sati took second birth at Maina and Himalayas house and came to be known as Parvati-Uma. After very arduous meditation she got married to Shiva. Their son Kartik destroyed Tarkasur.
            Lord Shiva went to kill Demons along with Uma. He brought Uma on the banks of the Saraswati. Uma made fifty two earthen statues. Lord Shiva breathed life into those. These 52 people became the Great Men of the Kadva Patidar Community. Maa Uma became the Kuldevi of Kadva Patidars. She gave them the blessings of happiness, prosparity, growth and her promise to reaching to them at the hour of their need and as and when they remember her. Lord Shiva established Maa Uma at the Umapur.
            From the body of Maa Umiya fifty one Shakipeeth were established. In the second incarnation Shiva established the temple of Maa at Unjha, which is her unbroken incarnation and not the Shakipeeth of the body parts. The wishes come true when prayers are offered here.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Page