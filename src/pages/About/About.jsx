import React from 'react';
import my_photo from '../../../src/assets/images/my_photo.jpg'
import './About.css'

const About = () => {
    return (
        <div id="about" className=" pb-36 bg-1 text-white ">
            <div className="container mx-auto">
                <h1 className=" py-24 text-4xl font-bold">About Me</h1>
                <div className="flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-2 py-10 px-3 lg:p-16 rounded-box lg:border-l-8 border-gray-400">
                    <div className="lg:w-1/3">
                        <img className=" h-40 mx-auto lg:h-80 border-8 border-gray-700 rounded-full" src={my_photo} alt="" />
                    </div>
                    <div className="lg:w-2/3 text-center lg:text-left lg:pl-10">
                        <h1 className=" text-3xl lg:text-5xl font-thin text-green-400 pt-10 lg:pt-0">Md. Shahriar Mehedi</h1>
                        <p className=" italic font-thin lg:text-xl text-gray-400 pt-2">A passionate MERN stack developer</p><br />
                        <p className="text-gray-400 text-justify">Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to any organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work to all of my employers.
                        </p> <br />
                        <h3 className=" text-lg mb-5  text-gray-400">Web Technologies I'm using so far:</h3>
                        <div>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> HTML</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> CSS</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> JAVASCRIPT</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> JAVASCRIPT ES6+</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> BOOTSTRAP</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> TAILWINDCSS</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> MATERIAL UI</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> REACT</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> NODE JS</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> EXPRESS</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> MONGODB</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> GOOGLE CLOUD</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> GOOGLE MAPS</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> JWT</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> PWA</button>
                        </div> <br />
                        <h3 className=" text-lg mb-5  text-gray-400">Tools & Softwares I use:</h3>
                        <div>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> VS CODE</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> GIT</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> GITHUB</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> HEROKU</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> NETLIFY</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> CPANEL</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> FIGMA</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> PHOTOSHOP</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> ILLUSTRATOR</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> XD</button>
                            <button className="px-3 py-1 text-sm bg-gray-800 text-green-400 rounded-full m-1"> ANDROID STUDIO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;