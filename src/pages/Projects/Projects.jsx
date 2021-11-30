import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Projects.css';
import jadoo from '../../../src/assets/images/projectImages/jadoo.png'
import copaAmerica from '../../../src/assets/images/projectImages/copa-america.png'
import bookArchive from '../../../src/assets/images/projectImages/bppk-archive.png'
// import droneCraft from '../../../src/assets/images/projectImages/droneCraft.png'
// import expressTrip from '../../../src/assets/images/projectImages/Express-trip.png'
// import gymnesia from '../../../src/assets/images/projectImages/gymnesia.png'
// import hireWebDev from '../../../src/assets/images/projectImages/Hire-Web-Dev.png'
// import metroCoder from '../../../src/assets/images/projectImages/MetroCoder.png'
// import panda from '../../../src/assets/images/projectImages/panda.png'
import superStore from '../../../src/assets/images/projectImages/super-store.png'

const Projects = () => {
    return (
        <div id="projects" className=" bg-2 text-white pb-20 pt-10">
            <div className="container mx-auto">
                <h1 className=" py-24 text-4xl font-bold">My Projects</h1>
                <Tabs>
                    <TabList>
                        <Tab>html</Tab>
                        <Tab>Javascript</Tab>
                        <Tab>React</Tab>
                        <Tab>Fullstack</Tab>
                        <Tab>All Projects</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className="mt-10 mb-10 text-green-400 text-2xl font-semibold">Projects using html & css only</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {/* Single Project */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 bg-3 w-5/6 lg:w-full mx-auto rounded-box py-10 lg:pl-10">
                                <div>
                                    <img className=" mx-auto rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96" src={jadoo} alt="" />
                                </div>
                                <div>
                                    <h2 className="pl-5 text-xl mb-2 font-semibold">
                                        Project: <span className="text-green-400">Jadoo Tour</span>
                                    </h2>
                                    <h2>
                                        Technology Used:
                                    </h2>
                                    <div className="mt-5">
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> html</button>
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> css</button>
                                    </div>
                                    <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                        This is a tourism related website which is created with html & vanilla css only. This site is a mobile  responsive website.
                                    </h3>
                                    <div className=" mt-16">
                                        <a target="_blank" rel="noreferrer" href="https://shahriarmehedi.github.io/travel-css-responsive/" className="px-3 mx-2 text-gray-900 py-2 rounded bg-green-400 hover:bg-gray-700 hover:text-white transition duration-300">Live Site</a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/shahriarmehedi/travel-css-responsive" className="px-3 mx-2 text-gray-900 py-2 rounded bg-green-400 hover:bg-gray-700 hover:text-white transition duration-300">Source Code</a>
                                    </div>
                                </div>
                            </div>

                            {/* Single Project */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 bg-3 w-5/6 lg:w-full mx-auto rounded-box py-10 lg:pl-10">
                                <div>
                                    <img className=" mx-auto rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96" src={copaAmerica} alt="" />
                                </div>
                                <div>
                                    <h2 className="pl-5 text-xl mb-2 font-semibold">
                                        Project: <span className="text-green-400">Copa America</span>
                                    </h2>
                                    <h2>
                                        Technology Used:
                                    </h2>
                                    <div className="mt-5">
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> html</button>
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> css</button>
                                    </div>
                                    <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                        This is a football tournament related website which is created with html & vanilla css only. This site is also mobile  responsive.
                                    </h3>
                                    <div className=" mt-16">
                                        <a target="_blank" rel="noreferrer" href="https://shahriarmehedi.github.io/copa-america-bootstrap-landing-page/" className="px-3 mx-2 text-gray-900 py-2 rounded bg-green-400 hover:bg-gray-700 hover:text-white transition duration-300">Live Site</a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/shahriarmehedi/copa-america-bootstrap-landing-page" className="px-3 mx-2 text-gray-900 py-2 rounded bg-green-400 hover:bg-gray-700 hover:text-white transition duration-300">Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>




                    <TabPanel>
                        <h2 className="mt-10 mb-10 text-green-400 text-2xl font-semibold">Projects using html, css & Javascript</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {/* Single Project */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 bg-3 w-5/6 lg:w-full mx-auto rounded-box py-10 lg:pl-10">
                                <div>
                                    <img className=" mx-auto rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96" src={bookArchive} alt="" />
                                </div>
                                <div>
                                    <h2 className="pl-5 text-xl mb-2 font-semibold">
                                        Project: <span className="text-green-400">Book Archive</span>
                                    </h2>
                                    <h2>
                                        Technology Used:
                                    </h2>
                                    <div className="mt-5">
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> html</button>
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> css</button>
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> JavaScript</button>
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> Rest API</button>
                                    </div>
                                    <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                        This is a book searching website using a Rest API for finding any known books all over the world
                                    </h3>
                                    <div className=" mt-16">
                                        <a target="_blank" rel="noreferrer" href="https://shahriar-books-archive.netlify.app/" className="px-3 mx-2 text-gray-900 py-2 rounded bg-green-400 hover:bg-gray-700 hover:text-white transition duration-300">Live Site</a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/shahriarmehedi/book-archive-search-rest-api" className="px-3 mx-2 text-gray-900 py-2 rounded bg-green-400 hover:bg-gray-700 hover:text-white transition duration-300">Source Code</a>
                                    </div>
                                </div>
                            </div>

                            {/* Single Project */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 bg-3 w-5/6 lg:w-full mx-auto rounded-box py-10 lg:pl-10">
                                <div>
                                    <img className=" mx-auto rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96" src={superStore} alt="" />
                                </div>
                                <div>
                                    <h2 className="pl-5 text-xl mb-2 font-semibold">
                                        Project: <span className="text-green-400">Super Store</span>
                                    </h2>
                                    <h2>
                                        Technology Used:
                                    </h2>
                                    <div className="mt-5">
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> html</button>
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> css</button>
                                        <button className="px-3 font-light py-1 text-sm bg-gray-700 text-green-400 rounded-full m-1"> JavaScript</button>
                                    </div>
                                    <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                        This is a store/e-commerce website shopping cart calculation using vanilla JavaScript.
                                    </h3>
                                    <div className=" mt-16">
                                        <a target="_blank" rel="noreferrer" href="https://shahriar-super-store.netlify.app/" className="px-3 mx-2 text-gray-900 py-2 rounded bg-green-400 hover:bg-gray-700 hover:text-white transition duration-300">Live Site</a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/shahriarmehedi/super-store-cart-project" className="px-3 mx-2 text-gray-900 py-2 rounded bg-green-400 hover:bg-gray-700 hover:text-white transition duration-300">Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>




                    <TabPanel>
                        <h2 className="mt-10 text-green-400 text-2xl font-semibold">Coming Soon</h2>
                    </TabPanel>



                    <TabPanel>
                        <h2 className="mt-10 text-green-400 text-2xl font-semibold">Coming Soon</h2>
                    </TabPanel>



                    <TabPanel>
                        <h2 className="mt-10 text-green-400 text-2xl font-semibold">Coming Soon</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Projects;