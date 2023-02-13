import React from 'react';
import Link from 'next/link';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <section className='bg-[#3482ad] py-6 text-white'>
            <div className='max-w-[1240px] justify-content mx-auto w-5/6 gap-16'>
                <div className="flex justify-center gap-4">
                    <div>
                        <AiFillFacebook size={30}/>
                    </div>
                    <div>
                        <AiFillInstagram size={30}/>
                    </div>
                </div>
                <p className="text-center my-2 font-bold">Jim's Construction, LLC</p>
                <p className="text-center my-2 font-bold">Birmingham, Alabama</p>
                <div className='justify-center flex-col md:flex-row flex gap-2 my-2 font-bold text-center'>
                    <p>info@jimsconstructionbham.com <span className="invisible md:visible ml-1"> |</span></p>
                    <p>205-253-9901</p>
                </div>
                <p className="text-center mt-4 text-sm">Copyright @ 2020 Jim's Construction, LLC - All Rights Reserved</p>
                <p className="text-center mt-1 text-xs">Built in Marietta by M&D Web Design</p>

            </div>
            {/* right side  built */}
            <div className='max-w-[1240px] text-sm mt-4 justify-content mx-auto w-5/6 gap-16 flex text-white'>
                
            </div>
        </section>
    )
}

export default Footer;
