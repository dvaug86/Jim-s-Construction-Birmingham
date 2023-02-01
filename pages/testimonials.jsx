import React from 'react';
import Image from 'next/image';
import testimonialImg from '../public/assets/IMG_1340.jpg'

const testimonials = () => {
  return (
    <div className="w-full relative m-auto">
      <div className='w-auto h-[74vh] relative flex justify-center'>
        <Image
          className="object-cover"
          src={testimonialImg}
          alt='testimonials image'
          fill
        />

        <div 
        className="flex flex-col justify-center z-[150] text-white text-5xl bg-black/90 font-bold"
        style={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        >
          <div className="flex justify-center my-5 px-5">
            Reviews Coming Soon!
          </div>
        </div>
      </div>
    </div >
  )
}

export default testimonials