import React from 'react';
import { CiBellOn } from "react-icons/ci";
const Navbar = () => {
    return (
        <div className="">
            <header className="flex w-full justify-center items-center bg-slate-900 h-16">
                <div className="container">
                    <nav className="flex w-full  justify-between  text-white opacity-90 text-start font-semibold">
                        <ul className="flex flex-row gap-10">
                            <li>
                                <a href="" target="_blank" className="text-sm">Dashboard</a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="text-sm">Master Price</a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="text-sm">Custom Price</a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="text-sm">Calendar</a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="text-sm">Reports</a>
                            </li>
                        </ul>

                        <ul className="flex items-center flex-row gap-10">
                            <li className="relative">
                                <a href=""><CiBellOn size={30}/></a>
                                <div className="bg-red-500 w-4 h-4 rounded-full shadow-xl absolute top-0 right-0">
                                    <span className="flex items-center justify-center text-sm">1</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-center">
                                <img
                                    src="https://storyblok-cdn.photoroom.com/f/191576/1000x1000/38dc8dba9a/light_blue_background.webp/m/filters:quality(75)"
                                    className="w-7 h-7 rounded-full" alt={''}/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;