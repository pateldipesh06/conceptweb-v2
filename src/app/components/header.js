"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagelogo from '../../../public/Concept_Group_logo.png';
import OurServices from '../../../public/OurServices.jpg';
import './css/header.css';

const Header = () => {
    const [isMenuOpen, setShowMenu] = useState(false);
    const [isMenuOpen1, setShowMenu1] = useState(false);
    const [isMenuOpen2, setShowMenu2] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!isMenuOpen);

    };
    const toggleMenu1 = () => {
        setShowMenu1(!isMenuOpen1);

    };
    const toggleMenu2 = () => {
        setShowMenu2(!isMenuOpen2);

    };




    return (


        <nav className=" border-gray-200 dark:border-gray-600 ">
            <div className=" navbar  ">

                <div className='imagelogo'>
                    <Image src={imagelogo} alt=''></Image>
                </div>

                <button onClick={toggleMenu} data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden dataCollapseToggle focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dataCollapseToggle dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                    <span className="sr-only"></span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="mega-menu-full" className={`items-center justify-between font-medium' flex' : 'hidden' 'bg-blue-500' : w-full lg:flex lg:w-auto lg:order-1`}>
                    <ul className="navbar-collapse   ">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">About us</a>
                        </li>
                        <li>
                            <button onClick={toggleMenu1} id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded lg:w-auto dataCollapseToggle lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">Services <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>

                        </li>

                        <li>
                            <a href="../elearn" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">E_learning</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">Svagyan</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">careers</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                        </li>
                    </ul>

                </div>




            </div>


            <div id="navbarsecond" className={`font-medium ${isMenuOpen ? '' : 'hidden'} ${isMenuOpen ? 'bg-blue-500' : ''} `}>
                <ul className="navbar-collapse   ">
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">About us</a>
                    </li>
                    <li>
                        <button onClick={toggleMenu2} id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded lg:w-auto dataCollapseToggle lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">Services <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg></button>

                        <div id="mega-menu-full-dropdown" className={`isMenuOpen2 mt-1 border-gray-200 shadow-sm ${isMenuOpen2 ? 'flex' : 'hidden'}  dark:border-gray-600`}>
                            <div className="grid max-w-screen-xl  mx-auto text-gray-900 dark:text-white sm:grid-cols-2 lg:px-6">
                                <ul>
                                    <li>
                                        <a href="#" className="blockrounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg height="512" version="1.1" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M472.875 184.021l-224-149.333c-5.374-3.583-12.376-3.583-17.75 0l-224 149.333c-4.451 2.967-7.125 7.963-7.125 13.312v149.333c0 5.35 2.674 10.346 7.125 13.312l224 149.333c2.687 1.792 5.781 2.688 8.875 2.688s6.188-0.896 8.875-2.688l224-149.333c4.451-2.967 7.125-7.963 7.125-13.312v-149.333c0-5.349-2.674-10.345-7.125-13.312zM240 327.438l-83.156-55.438 83.156-55.437 83.156 55.437-83.156 55.438zM256 188.771v-110.875l179.155 119.438-83.155 55.437-96-64zM224 188.771l-96 64-83.156-55.437 179.156-119.438v110.875zM99.156 272l-67.156 44.771v-89.541l67.156 44.77zM128 291.229l96 64v110.874l-179.156-119.436 83.156-55.438zM256 355.229l96-64 83.156 55.438-179.156 119.437v-110.875zM380.844 272l67.156-44.77v89.542l-67.156-44.772z"></path>
                                            </svg> <a>3D ANIMATION</a></div>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg height="640" version="1.1" viewBox="0 0 640 640" width="640" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 128c0-35.2 28.8-64 64-64h512c35.346 0 64 28.654 64 64v0 384c0 35.346-28.654 64-64 64v0h-512c-35.346 0-64-28.654-64-64v0-384zM192 128v384h256v-384h-256zM64 160v64h64v-64h-64zM64 288v64h64v-64h-64zM64 416v64h64v-64h-64zM512 160v64h64v-64h-64zM512 288v64h64v-64h-64zM512 416v64h64v-64h-64zM256 224l160 96-160 96v-192z"></path>
                                            </svg><a>2D ANIMATION</a></div>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block  rounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg height="512" version="1.1" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M192 144c0-44.183 35.817-80 80-80s80 35.817 80 80c0 44.183-35.817 80-80 80s-80-35.817-80-80zM0 144c0-44.183 35.817-80 80-80s80 35.817 80 80c0 44.183-35.817 80-80 80s-80-35.817-80-80zM384 304v-48c0-17.6-14.4-32-32-32h-320c-17.6 0-32 14.4-32 32v160c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32v-48l128 80v-224l-128 80zM320 384h-256v-96h256v96z"></path>
                                            </svg><a>VFX</a></div>

                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="576" height="448" viewBox="0 0 576 448">
                                                <path d="M443.5 209l4.5 79c2 35.25-71.75 64-160 64s-162-28.75-160-64l4.5-79 143.5 45.25c4 1.25 8 1.75 12 1.75s8-0.5 12-1.75zM576 128c0 3.5-2.25 6.5-5.5 7.75l-280 88c-1 0.25-1.75 0.25-2.5 0.25s-1.5 0-2.5-0.25l-163-51.5c-14.25 11.25-24.25 38.75-26.25 72.5 9.5 5.5 15.75 15.5 15.75 27.25 0 11.25-5.75 21-14.5 26.75l14.5 108.25c0.25 2.25-0.5 4.5-2 6.25s-3.75 2.75-6 2.75h-48c-2.25 0-4.5-1-6-2.75s-2.25-4-2-6.25l14.5-108.25c-8.75-5.75-14.5-15.5-14.5-26.75 0-12 6.75-22.25 16.25-27.75 1.5-29.25 9-60.75 24.5-82.5l-83.25-26c-3.25-1.25-5.5-4.25-5.5-7.75s2.25-6.5 5.5-7.75l280-88c1-0.25 1.75-0.25 2.5-0.25s1.5 0 2.5 0.25l280 88c3.25 1.25 5.5 4.25 5.5 7.75z"></path>
                                            </svg><a>L M S </a></div>

                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#" className="block  rounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="416" height="448" viewBox="0 0 416 448">
                                                <path d="M381.75 362c18.75 29.75 5.5 54-29.75 54h-288c-35.25 0-48.5-24.25-29.75-54l125.75-198.25v-99.75h-16c-8.75 0-16-7.25-16-16s7.25-16 16-16h128c8.75 0 16 7.25 16 16s-7.25 16-16 16h-16v99.75zM187 180.75l-68 107.25h178l-68-107.25-5-7.75v-109h-32v109z"></path>
                                            </svg><a>Simulation</a></div>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block  rounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="416" height="448" viewBox="0 0 416 448">
                                                <path d="M416 274.5c0 25.75-14.75 47.25-42 47.25-30.5 0-38.5-27.75-66-27.75-20 0-27.5 12.5-27.5 31 0 19.5 8 38.25 7.75 57.5v1.25c-2.75 0-5.5 0-8.25 0.25-25.75 2.5-51.75 7.5-77.75 7.5-17.75 0-36.25-7-36.25-27.5 0-27.5 27.75-35.5 27.75-66 0-27.25-21.5-42-47.25-42-26.25 0-50.5 14.5-50.5 43.25 0 31.75 24.25 45.5 24.25 62.75 0 8.75-5.5 16.5-11.5 22.25-7.75 7.25-18.75 8.75-29.25 8.75-20.5 0-41-2.75-61.25-6-4.5-0.75-9.25-1.25-13.75-2l-3.25-0.5c-0.5-0.25-1.25-0.25-1.25-0.5v-256c1 0.75 15.75 2.5 18.25 3 20.25 3.25 40.75 6 61.25 6 10.5 0 21.5-1.5 29.25-8.75 6-5.75 11.5-13.5 11.5-22.25 0-17.25-24.25-31-24.25-62.75 0-28.75 24.25-43.25 50.75-43.25 25.5 0 47 14.75 47 42 0 30.5-27.75 38.5-27.75 66 0 20.5 18.5 27.5 36.25 27.5 28.75 0 57.25-6.5 85.75-8v0.5c-0.75 1-2.5 15.75-3 18.25-3.25 20.25-6 40.75-6 61.25 0 10.5 1.5 21.5 8.75 29.25 5.75 6 13.5 11.5 22.25 11.5 17.25 0 31-24.25 62.75-24.25 28.75 0 43.25 24.25 43.25 50.5z"></path>
                                            </svg><a>Interactivity</a></div>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="352" height="448" viewBox="0 0 352 448">
                                                <path d="M352 384c0 44-91.25 64-176 64s-176-20-176-64c0-34 50.75-50 93.25-57.25 8.75-1.5 17 4.25 18.5 13s-4.25 17-13 18.5c-51.5 9-66 23-66.75 26 2.5 8.5 50.5 31.75 144 31.75s141.5-23.25 144-32.25c-0.75-2.5-15.25-16.5-66.75-25.5-8.75-1.5-14.5-9.75-13-18.5s9.75-14.5 18.5-13c42.5 7.25 93.25 23.25 93.25 57.25zM256 160v96c0 8.75-7.25 16-16 16h-16v96c0 8.75-7.25 16-16 16h-64c-8.75 0-16-7.25-16-16v-96h-16c-8.75 0-16-7.25-16-16v-96c0-17.75 14.25-32 32-32h96c17.75 0 32 14.25 32 32zM232 64c0 31-25 56-56 56s-56-25-56-56 25-56 56-56 56 25 56 56z"></path>
                                            </svg><a>AR / VR</a></div>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" viewBox="0 0 512 512">
                                                <path d="M0 32v320h512v-320h-512zM480 320h-448v-256h448v256zM336 384h-160l-16 64-32 32h256l-32-32z"></path>
                                            </svg><a>IT Solutions</a></div>

                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="384" height="448" viewBox="0 0 384 448">
                                                <path d="M101 277l38 38-13 13h-14v-24h-24v-14zM204.5 179.5c2 1.75 1.5 5.25-0.75 7.5l-72.75 72.75c-2.25 2.25-5.75 2.75-7.5 0.75-2-1.75-1.5-5.25 0.75-7.5l72.75-72.75c2.25-2.25 5.75-2.75 7.5-0.75zM136 352l136-136-72-72-136 136v72h72zM288 200l23-23c9.25-9.25 9.25-24.75 0-34l-38-38c-9.25-9.25-24.75-9.25-34 0l-23 23zM384 104v240c0 39.75-32.25 72-72 72h-240c-39.75 0-72-32.25-72-72v-240c0-39.75 32.25-72 72-72h240c39.75 0 72 32.25 72 72z"></path>
                                            </svg><a>Content Writing</a></div>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block  rounded-lg dataCollapseToggle dataCollapseToggle">
                                            <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="640" height="640" viewBox="0 0 640 640">
                                                <path d="M504 256l-119.68-120c-0.196-2.652-0.308-5.746-0.308-8.865 0-70.516 57.164-127.68 127.68-127.68 35.549 0 67.706 14.529 90.855 37.972l0.013 0.013c23.358 23.196 37.816 55.326 37.816 90.834 0 70.692-57.308 128-128 128-2.947 0-5.871-0.099-8.769-0.296l0.393 0.021zM59.2 489.6l294.4-294.080 90.56 90.56-294.4 294.4-90.24-90.88zM14.4 580.16l67.52-67.84 45.44 45.44-67.84 67.84-45.44-45.44zM320 480l64-64v224h-64v-160z"></path>
                                            </svg><a>Sound Design</a></div>

                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="../elearn" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">E_learning</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">Svagyan</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">careers</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded dataCollapseToggle lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dataCollapseToggle dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                    </li>
                </ul>
            </div>



            <div aria-hidden="false" id="mega-menu-full-dropdown" className={`isMenuOpen1  mt-1 border-gray-200 shadow-sm ${isMenuOpen1 ? '' : 'hidden'}  border-y  dark:border-gray-600` }>
            <div  style={{ justifyContent: 'space-between', alignItems: 'flex-start' }} className="grid d-flex max-w-screen-xl mx-auto text-gray-900 dark:text-white sm:grid-cols-2 lg:px-6">

                    {/* <ul className=''>
                        <li> */}
                            <div lassName="font-semibold">

                            <Image src={OurServices} style={{ position: 'relative', left: '', top: '11px' }} />
                            </div>





                        {/* </li>

                    </ul> */}
                    <ul>
                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg height="512" version="1.1" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M472.875 184.021l-224-149.333c-5.374-3.583-12.376-3.583-17.75 0l-224 149.333c-4.451 2.967-7.125 7.963-7.125 13.312v149.333c0 5.35 2.674 10.346 7.125 13.312l224 149.333c2.687 1.792 5.781 2.688 8.875 2.688s6.188-0.896 8.875-2.688l224-149.333c4.451-2.967 7.125-7.963 7.125-13.312v-149.333c0-5.349-2.674-10.345-7.125-13.312zM240 327.438l-83.156-55.438 83.156-55.437 83.156 55.437-83.156 55.438zM256 188.771v-110.875l179.155 119.438-83.155 55.437-96-64zM224 188.771l-96 64-83.156-55.437 179.156-119.438v110.875zM99.156 272l-67.156 44.771v-89.541l67.156 44.77zM128 291.229l96 64v110.874l-179.156-119.436 83.156-55.438zM256 355.229l96-64 83.156 55.438-179.156 119.437v-110.875zM380.844 272l67.156-44.77v89.542l-67.156-44.772z"></path>
                                </svg> <a>3D ANIMATION</a></div>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg height="640" version="1.1" viewBox="0 0 640 640" width="640" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 128c0-35.2 28.8-64 64-64h512c35.346 0 64 28.654 64 64v0 384c0 35.346-28.654 64-64 64v0h-512c-35.346 0-64-28.654-64-64v0-384zM192 128v384h256v-384h-256zM64 160v64h64v-64h-64zM64 288v64h64v-64h-64zM64 416v64h64v-64h-64zM512 160v64h64v-64h-64zM512 288v64h64v-64h-64zM512 416v64h64v-64h-64zM256 224l160 96-160 96v-192z"></path>
                                </svg><a>2D ANIMATION</a></div>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg height="512" version="1.1" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M192 144c0-44.183 35.817-80 80-80s80 35.817 80 80c0 44.183-35.817 80-80 80s-80-35.817-80-80zM0 144c0-44.183 35.817-80 80-80s80 35.817 80 80c0 44.183-35.817 80-80 80s-80-35.817-80-80zM384 304v-48c0-17.6-14.4-32-32-32h-320c-17.6 0-32 14.4-32 32v160c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32v-48l128 80v-224l-128 80zM320 384h-256v-96h256v96z"></path>
                                </svg><a>VFX</a></div>

                            </a>
                        </li>

                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="576" height="448" viewBox="0 0 576 448">
                                    <path d="M443.5 209l4.5 79c2 35.25-71.75 64-160 64s-162-28.75-160-64l4.5-79 143.5 45.25c4 1.25 8 1.75 12 1.75s8-0.5 12-1.75zM576 128c0 3.5-2.25 6.5-5.5 7.75l-280 88c-1 0.25-1.75 0.25-2.5 0.25s-1.5 0-2.5-0.25l-163-51.5c-14.25 11.25-24.25 38.75-26.25 72.5 9.5 5.5 15.75 15.5 15.75 27.25 0 11.25-5.75 21-14.5 26.75l14.5 108.25c0.25 2.25-0.5 4.5-2 6.25s-3.75 2.75-6 2.75h-48c-2.25 0-4.5-1-6-2.75s-2.25-4-2-6.25l14.5-108.25c-8.75-5.75-14.5-15.5-14.5-26.75 0-12 6.75-22.25 16.25-27.75 1.5-29.25 9-60.75 24.5-82.5l-83.25-26c-3.25-1.25-5.5-4.25-5.5-7.75s2.25-6.5 5.5-7.75l280-88c1-0.25 1.75-0.25 2.5-0.25s1.5 0 2.5 0.25l280 88c3.25 1.25 5.5 4.25 5.5 7.75z"></path>
                                </svg><a>L M S </a></div>

                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="416" height="448" viewBox="0 0 416 448">
                                    <path d="M381.75 362c18.75 29.75 5.5 54-29.75 54h-288c-35.25 0-48.5-24.25-29.75-54l125.75-198.25v-99.75h-16c-8.75 0-16-7.25-16-16s7.25-16 16-16h128c8.75 0 16 7.25 16 16s-7.25 16-16 16h-16v99.75zM187 180.75l-68 107.25h178l-68-107.25-5-7.75v-109h-32v109z"></path>
                                </svg><a>Simulation</a></div>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="416" height="448" viewBox="0 0 416 448">
                                    <path d="M416 274.5c0 25.75-14.75 47.25-42 47.25-30.5 0-38.5-27.75-66-27.75-20 0-27.5 12.5-27.5 31 0 19.5 8 38.25 7.75 57.5v1.25c-2.75 0-5.5 0-8.25 0.25-25.75 2.5-51.75 7.5-77.75 7.5-17.75 0-36.25-7-36.25-27.5 0-27.5 27.75-35.5 27.75-66 0-27.25-21.5-42-47.25-42-26.25 0-50.5 14.5-50.5 43.25 0 31.75 24.25 45.5 24.25 62.75 0 8.75-5.5 16.5-11.5 22.25-7.75 7.25-18.75 8.75-29.25 8.75-20.5 0-41-2.75-61.25-6-4.5-0.75-9.25-1.25-13.75-2l-3.25-0.5c-0.5-0.25-1.25-0.25-1.25-0.5v-256c1 0.75 15.75 2.5 18.25 3 20.25 3.25 40.75 6 61.25 6 10.5 0 21.5-1.5 29.25-8.75 6-5.75 11.5-13.5 11.5-22.25 0-17.25-24.25-31-24.25-62.75 0-28.75 24.25-43.25 50.75-43.25 25.5 0 47 14.75 47 42 0 30.5-27.75 38.5-27.75 66 0 20.5 18.5 27.5 36.25 27.5 28.75 0 57.25-6.5 85.75-8v0.5c-0.75 1-2.5 15.75-3 18.25-3.25 20.25-6 40.75-6 61.25 0 10.5 1.5 21.5 8.75 29.25 5.75 6 13.5 11.5 22.25 11.5 17.25 0 31-24.25 62.75-24.25 28.75 0 43.25 24.25 43.25 50.5z"></path>
                                </svg><a>Interactivity</a></div>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="352" height="448" viewBox="0 0 352 448">
                                    <path d="M352 384c0 44-91.25 64-176 64s-176-20-176-64c0-34 50.75-50 93.25-57.25 8.75-1.5 17 4.25 18.5 13s-4.25 17-13 18.5c-51.5 9-66 23-66.75 26 2.5 8.5 50.5 31.75 144 31.75s141.5-23.25 144-32.25c-0.75-2.5-15.25-16.5-66.75-25.5-8.75-1.5-14.5-9.75-13-18.5s9.75-14.5 18.5-13c42.5 7.25 93.25 23.25 93.25 57.25zM256 160v96c0 8.75-7.25 16-16 16h-16v96c0 8.75-7.25 16-16 16h-64c-8.75 0-16-7.25-16-16v-96h-16c-8.75 0-16-7.25-16-16v-96c0-17.75 14.25-32 32-32h96c17.75 0 32 14.25 32 32zM232 64c0 31-25 56-56 56s-56-25-56-56 25-56 56-56 56 25 56 56z"></path>
                                </svg><a>AR / VR</a></div>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" viewBox="0 0 512 512">
                                    <path d="M0 32v320h512v-320h-512zM480 320h-448v-256h448v256zM336 384h-160l-16 64-32 32h256l-32-32z"></path>
                                </svg><a>IT Solutions</a></div>

                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="384" height="448" viewBox="0 0 384 448">
                                    <path d="M101 277l38 38-13 13h-14v-24h-24v-14zM204.5 179.5c2 1.75 1.5 5.25-0.75 7.5l-72.75 72.75c-2.25 2.25-5.75 2.75-7.5 0.75-2-1.75-1.5-5.25 0.75-7.5l72.75-72.75c2.25-2.25 5.75-2.75 7.5-0.75zM136 352l136-136-72-72-136 136v72h72zM288 200l23-23c9.25-9.25 9.25-24.75 0-34l-38-38c-9.25-9.25-24.75-9.25-34 0l-23 23zM384 104v240c0 39.75-32.25 72-72 72h-240c-39.75 0-72-32.25-72-72v-240c0-39.75 32.25-72 72-72h240c39.75 0 72 32.25 72 72z"></path>
                                </svg><a>Content Writing</a></div>

                            </a>
                        </li>
                        <li>
                            <a href="#" className="block rounded-lg dataCollapseToggle dataCollapseToggle">
                                <div className="font-semibold"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="640" height="640" viewBox="0 0 640 640">
                                    <path d="M504 256l-119.68-120c-0.196-2.652-0.308-5.746-0.308-8.865 0-70.516 57.164-127.68 127.68-127.68 35.549 0 67.706 14.529 90.855 37.972l0.013 0.013c23.358 23.196 37.816 55.326 37.816 90.834 0 70.692-57.308 128-128 128-2.947 0-5.871-0.099-8.769-0.296l0.393 0.021zM59.2 489.6l294.4-294.080 90.56 90.56-294.4 294.4-90.24-90.88zM14.4 580.16l67.52-67.84 45.44 45.44-67.84 67.84-45.44-45.44zM320 480l64-64v224h-64v-160z"></path>
                                </svg><a>Sound Design</a></div>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>



        </nav>


    );
};

export default Header;
