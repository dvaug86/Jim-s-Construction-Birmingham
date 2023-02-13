import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import navLogo from '../public/assets/navLogo.png'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#3482ad');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#3482ad]/90' : 'fixed w-full h-20 z-[100] bg-[#3482ad]/90'}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <div className="h-[80%] w-[120px]">
                    <Link href='/'>
                        <Image
                            src={navLogo}
                            alt="company logo"
                            width="120"
                            height="50"
                            priority
                        />
                    </Link>
                </div>
                
                <div>
                    <ul className='hidden lg:flex text-white text-xl'>
                        <Link href='/'>
                            <li className="ml-10 uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/contact'>
                            <li className="ml-10 uppercase hover:border-b">Contact Us</li>
                        </Link>
                        <Link href='/services'>
                            <li className="ml-10 uppercase hover:border-b">Services</li>
                        </Link>
                        <Link href='/gallery'>
                            <li className="ml-10 uppercase hover:border-b">Gallery</li>
                        </Link>
                        <Link href='/testimonials'>
                            <li className="ml-10 uppercase hover:border-b">Testimonials</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='lg:hidden text-white'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className="hidden lg:flex text-white tracking-widest text-xl">
                    205-253-9901
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#3482ad] p-10 ease-in duration-500' : 'fixed left-[-200%] top-0 p-10 ease-in duration-500'}>
                    <div className="flex w-full items-center justify-end">

                        <div onClick={handleNav} className="rounded-full shadow-lg text-black bg-white cursor-pointer">
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4 w-[70%] mx-auto">
                        <Link href='/'>
                            <Image
                                src={navLogo}
                                width="auto"
                                hight="35"
                                alt="/"
                            />
                        </Link>
                    </div>
                    <div className='py-4 flex flex-col mx-auto text-white font-bold w-[70%]'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-base'>Home</li>
                            </Link>
                            <Link href='/contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-base'>Contact Us</li>
                            </Link>
                            <Link href='/services'>
                                <li onClick={() => setNav(false)} className='py-4 text-base'>Services</li>
                            </Link>
                            <Link href='/gallery'>
                                <li onClick={() => setNav(false)} className='py-4 text-base'>Gallery</li>
                            </Link>
                            <Link href='/testimonials'>
                                <li onClick={() => setNav(false)} className='py-4 text-base'>Testimonials</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex justify-center">

                        <div className="flex text-black justify-center gap-8 my-4 w-full sm:w-[80%]">
                            <div className='rounded-full shadow-lg  p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'>
                                <AiFillFacebook size={25} />
                            </div>
                            <div className='rounded-full shadow-lg  p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'>
                                <AiFillInstagram size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar;

