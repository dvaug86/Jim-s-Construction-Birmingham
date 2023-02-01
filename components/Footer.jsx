import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <section className='bg-[#3482ad] py-6'>
            <div className='max-w-[1240px] justify-content mx-auto w-5/6 gap-16 md:flex'>

                {/* left side contact */}
                <div className="mt-8 basis-1/3 md:mt-0 text-white">
                    <h1 className="my-2 font-bold text-lg">How to Reach Us</h1>
                    <p>xxx-xxx-xxxx</p>
                    <div>
                        <Link href='/'>Email Us</Link>
                    </div>
                    <div>
                        <Link href="https://www.facebook.com">Facebook</Link>
                    </div>
                </div>

                {/* middle side links */}
                <div className="mt-8 basis-1/3 md:mt-0 text-white">
                    <h1 className='my-2 font-bold flex text-lg'>Navigate</h1>
                    <div>
                        <Link href='/'>Home</Link>
                        <Link href='/'>Contact Us</Link>
                        <Link href='/'>Services</Link>
                        <Link href='/'>Gallery</Link>
                        <Link href='/'>Testimonials</Link>
                    </div>
                </div>
            </div>
            {/* right side  built */}
            <div className='max-w-[1240px] text-sm mt-4 justify-content mx-auto w-5/6 gap-16 flex text-white'>
                <p>Built in Marietta by M&D Web Design</p>
            </div>
        </section>
    )
}

export default Footer;
