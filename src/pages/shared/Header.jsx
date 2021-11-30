import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import shahriar_logo from '../../../src/assets/images/shahriar_logo.svg'

const Header = () => {
    return (
        <>
            <nav className="fixed w-full">
                <div class="navbar bg-gray-900  text-neutral-content h-20">
                    <div class="flex-1 px-2 mx-2">
                        <img className="pl-8 md:pl-10 h-12" src={shahriar_logo} alt="" />
                        <span class=" font-bold pl-2 text-lg md:text-2xl ">
                            Shahriars Portfolio
                        </span>
                    </div>
                    <div class="flex-none hidden px-2 mx-2 lg:flex pr-10">
                        <div class="flex items-center">
                            <AnchorLink href="#home" class="btn btn-ghost btn-sm rounded-btn mx-2">

                                HOME

                            </AnchorLink>
                            <AnchorLink href="#about" class="btn btn-ghost btn-sm rounded-btn mx-3">

                                ABOUT ME

                            </AnchorLink>
                            <AnchorLink href="#projects" class="btn btn-ghost btn-sm rounded-btn mx-3">

                                PROJECTS

                            </AnchorLink>
                            <AnchorLink href="#contact" class="btn px-7 py-2 rounded bg-green-400 text-gray-900 hover:text-white transition duration-500 mx-3">

                                CONTACT

                            </AnchorLink>
                        </div>
                    </div>
                    <div class="flex-none md:hidden">
                        <button class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>



            </nav>
        </>
    );
};

export default Header;