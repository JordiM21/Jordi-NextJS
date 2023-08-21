import React from 'react';
import english from '../public/Certificates/english.png'
import freeCodeCamp from '../public/Certificates/freeCodeCamp.png'
import fullStack from '../public/Certificates/fullStack.png'
import illustrator from '../public/Certificates/illustrator.png'
import meta from '../public/Certificates/Meta.png'
import noCountry from '../public/Certificates/noCountry.png'
import Image from 'next/image';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Link from 'next/link';

const Certificates = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 mt-20">
      <div>
        <h3 className="text-3xl py-1 dark:text-white">
          My Certificates
        </h3>
        <p className="dark:text-gray-400">
          I always wanted to go deeper on Development so i am constantly learning new things and improving the way i think and the way i code so,{" "}
          <span className="text-teal-500">
            Here are some of the more important certificates i've got
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className='group w-[300px] relative h-[260px] rounded-lg bg-gray-400 object-cover hover:scale-105 transition-all 1s ease-in cursor-pointer overflow-hidden hover:shadow-xl shadow-black'>
          <Link href={"https://coursera.org/share/bf4616ac93568348ebb590bf2104b999"} target='_blank'>
            <Image className='rounded-t-lg' src={meta} />
            <div className='mx-4 flex justify-between'>
              <p className=' text-gray-800'>
                Advanced React
              </p>
              <p className=' text-gray-100'>
                Meta
              </p>
            </div>
            <BsFillArrowRightCircleFill className='text-4xl fill-sky-700 absolute -right-9 transition-all 1s ease-in 1.5s group-hover:right-2 top-2' />
          </Link>
        </div>
        <div className='group w-[300px] relative h-[260px] rounded-lg bg-gray-400 object-cover hover:scale-105 transition-all 1s ease-in cursor-pointer overflow-hidden hover:shadow-xl shadow-black'>
          <Link href={"https://www.efset.org/cert/vpC2po"} target='_blank'>
            <Image className='rounded-t-lg ' src={english} />
            <div className='mx-4 flex justify-between'>
              <p className=' text-gray-800'>
                English Proficient C2
              </p>
              <p className=' text-gray-100'>
                EF
              </p>
            </div>
            <BsFillArrowRightCircleFill className='text-4xl fill-sky-700 absolute -right-9 transition-all 1s ease-in 1.5s group-hover:right-2 top-2' />
          </Link>
        </div>
        <div className='group w-[300px] relative h-[260px] rounded-lg bg-gray-400 object-cover hover:scale-105 transition-all 1s ease-in cursor-pointer overflow-hidden hover:shadow-xl shadow-black'>
          <Link href={"https://certificates.academlo.com/en/verify/11731029915849"} target='_blank'>
            <Image className='rounded-t-lg' src={fullStack} />
            <div className='mx-4 flex justify-between'>
              <p className=' text-gray-800'>
                Full-Stack Developer
              </p>
              <p className=' text-gray-100'>
                Academlo
              </p>
            </div>
            <BsFillArrowRightCircleFill className='text-4xl fill-sky-700 absolute -right-9 transition-all 1s ease-in 1.5s group-hover:right-2 top-2' />
          </Link>
        </div>
        <div className='group w-[300px] relative h-[260px] rounded-lg bg-gray-400 object-cover hover:scale-105 transition-all 1s ease-in cursor-pointer overflow-hidden hover:shadow-xl shadow-black'>
          <Link href={"https://www.freecodecamp.org/certification/JordiM21/front-end-development-libraries"} target='_blank'>
            <Image className='rounded-t-lg' src={freeCodeCamp} />
            <div className='mx-4 flex justify-between'>
              <p className=' text-gray-800'>
                Front-End Dev
              </p>
              <p className=' text-gray-100'>
                FreeCodeCamp
              </p>
            </div>
            <BsFillArrowRightCircleFill className='text-4xl fill-sky-700 absolute -right-9 transition-all 1s ease-in 1.5s group-hover:right-2 top-2' />
          </Link>
        </div>
        <div className='group w-[300px] relative h-[260px] rounded-lg bg-gray-400 object-cover hover:scale-105 transition-all 1s ease-in cursor-pointer overflow-hidden hover:shadow-xl shadow-black'>
          <Link href={"https://www.domestika.org/es/certificates/c6829bcdaa497d185528cb0e4bf5e8a9"} target='_blank'>
            <Image className='rounded-t-lg' src={illustrator} />
            <div className='mx-4 flex justify-between'>
              <p className=' text-gray-800'>
                Graphic Designer
              </p>
              <p className=' text-gray-100'>
                Domestika
              </p>
            </div>
            <BsFillArrowRightCircleFill className='text-4xl fill-sky-700 absolute -right-9 transition-all 1s ease-in 1.5s group-hover:right-2 top-2' />
          </Link>
        </div>
        <div className='group w-[300px] relative h-[260px] rounded-lg bg-gray-400 object-cover hover:scale-105 transition-all 1s ease-in cursor-pointer overflow-hidden hover:shadow-xl shadow-black'>
          <Image className='rounded-t-lg' src={noCountry} />
          <div className='mx-4 flex justify-between'>
            <p className=' text-gray-800'>
              Work Experience
            </p>
            <p className=' text-gray-100'>
              NoCountry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
