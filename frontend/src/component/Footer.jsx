import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import navbar from '../datas/navbar';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-[#6656ce] text-white mt-4 pt-2 px-14'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 text-sm'>
                {/* left side */}
                <div className='pl-4'>
                    <p className='text-[#fff] text-5xl'>Frame It</p>
                    <p className='w-full text-white md:w-2/3 leading-6 text-justify'>
                        Frame it is an online platform that connects buyers and sellers, allowing them to exchange goods, services, or digital products. It acts as a virtual marketplace, enabling users to shop, sell, or trade through the internet.
                    </p>
                </div>

                {/* center */}
                <div>
                    <h1 className='text-xl font-medium mb-5'>LINKS</h1>
                    <ul className='flex flex-col gap-2 text-white'>
                        {navbar.map((navbar, index) => (
                            <NavLink to={navbar.href} key={index}>
                                <li
                                    onClick={() => { scrollTo(0, 0); navigate(navbar.href); }}
                                    className="cursor-pointer hover:text-gray-300"
                                >
                                    {navbar.name}
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>

                {/* right side - Socials */}
                <div>
                    <h1 className='text-xl text-white font-medium mb-5'>Socials</h1>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-2 cursor-pointer hover:text-gray-300'>
                            <FaFacebook className='text-xl' />
                            Facebook
                        </li>
                        <li className='flex items-center gap-2 cursor-pointer hover:text-gray-300'>
                            <FaInstagram className='text-xl' />
                            Instagram
                        </li>
                        <li className='flex items-center gap-2 cursor-pointer hover:text-gray-300'>
                            <FaLinkedin className='text-xl' />
                            LinkedIn
                        </li>
                        <li className='flex items-center gap-2 cursor-pointer hover:text-gray-300'>
                            <FaTwitter className='text-xl' />
                            Twitter
                        </li>
                    </ul>
                </div>

                {/* Get in touch */}
                <div>
                    <h1 className='text-xl text-white font-medium mb-5'>GET IN TOUCH</h1>
                    <ul className='flex flex-col gap-2 text-white'>
                        <li>+977-019289493</li>
                        <li>frameit@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr />
            <p className='text-sm text-center py-5 text-white'>
                Copyright 2024@ Frame It - All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;
