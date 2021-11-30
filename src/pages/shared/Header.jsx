import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import shahriar_logo from '../../../src/assets/images/shahriars_logo.png'

const Header = () => {
    return (
        <>
            <nav className="fixed w-full">
                <div className="navbar bg-gray-900  text-neutral-content h-20">
                    <div className="flex-1 px-2 mx-2">
                        <img className="pl-8 md:pl-10 h-12" src={shahriar_logo} alt="" />
                        <span className=" font-bold pl-2 text-lg md:text-2xl ">
                            Shahriars Portfolio
                        </span>
                    </div>
                    <div className="flex-none hidden px-2 mx-2 lg:flex pr-10">
                        <div className="flex items-center">
                            <AnchorLink href="#home" className="btn btn-ghost btn-sm rounded-btn mx-2">

                                HOME

                            </AnchorLink>
                            <AnchorLink href="#about" className="btn btn-ghost btn-sm rounded-btn mx-3">

                                ABOUT ME

                            </AnchorLink>
                            <AnchorLink href="#projects" className="btn btn-ghost btn-sm rounded-btn mx-3">

                                PROJECTS

                            </AnchorLink>
                            <AnchorLink href="#contact" className="btn px-7 py-2 rounded bg-green-400 text-gray-900 hover:text-white transition duration-500 mx-3">

                                CONTACT

                            </AnchorLink>
                        </div>
                    </div>
                    <div className="flex-none md:hidden">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>



            </nav>
        </>
    );
};

export default Header;