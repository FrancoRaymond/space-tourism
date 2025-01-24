import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import { useAppContext } from '../App';
import logo from '../assets/shared/logo.svg';
import menu from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';

const Navbar = () => {
    
    const location = useLocation(); 
    const { size,isMenuOpen, setIsMenuOpen } = useAppContext();

 

    const handleMenuClick = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="fixed top-5 text-white bg-black bg-opacity-30 py-3 sm:py-0 sm:pt-3 sm:bg-none w-full z-50 flex justify-between pl-2 sm:pl-5 md:pl-10 lg:pl-24 pt-3 items-center">
            <a href=""><img src={logo} alt="logo" className="size-8" /></a> 
            <nav
                className={` backdrop-blur-md bg-white/20 py-4 sm:px-10 md:px-20 ${
                    size >= 640
                        ? 'block relative h-auto bg-transparent' 
                        : isMenuOpen
                        ? 'absolute w-full py-10 h-screen bg-black bg-opacity-20 top-14 left-1/2 -translate-x-1/2 items-center' 
                        : 'hidden' 
                }`}
            >
                <ul
                    className={`flex gap-7 ${
                        isMenuOpen && size < 640 ? 'flex-col mx-auto w-fit items-center' : ''
                    }`}
                >
                    <li>
                        <a
                            href="/"
                            className={` ${
                                location.pathname === '/' ? 'border-b-2 border-white' : ''
                            } py-4`}
                        >
                            <strong>00</strong>  Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/destination"
                            className={`${
                                location.pathname === '/destination'
                                    ? 'border-b-2 border-white'
                                    : ''
                            } py-4`}
                        >
                            <strong>01</strong>  Destination
                        </a>
                    </li>
                    <li>
                        <a
                            href="/crew"
                            className={` ${
                                location.pathname === '/crew' ? 'border-b-2 border-white' : ''
                            } py-4`}
                        >
                            <strong>02</strong>  Crew
                        </a>
                    </li>
                    <li>
                        <a
                            href="/technology"
                            className={`sm:mr-5 md:mr-10 lg:mr-24 ${
                                location.pathname === '/technology'
                                    ? 'border-b-2 border-white'
                                    : ''
                            } py-4`}
                        >
                            <strong>03</strong>  Technology
                        </a>
                    </li>
                </ul>
            </nav>
            <img
                src={menu}
                onClick={handleMenuClick}
                alt="hamburger icon"
                className={`${size >= 640 || isMenuOpen ? 'hidden' : 'block'} size-6 cursor-pointer mr-2`}
            />
            <img
                src={close}
                onClick={handleMenuClick}
                alt="close menu icon"
                className={`${isMenuOpen ? 'block' : 'hidden'} size-6 cursor-pointer mr-2`}
            />
        </div>
    );
};

export default Navbar;
