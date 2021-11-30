import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="h-screen bg-gray-900 text-white">
            <h1 className=" py-24 text-4xl font-bold">Contact Me</h1>
            <div>
                <form className="flex flex-col w-5/6 lg:w-1/2 mx-auto" action="">
                    <input className="rounded text-gray-900 px-20 py-5 my-4" type="text" name="" id="" placeholder="Your Name" />
                    <input className=" rounded text-gray-900 px-20 py-5 my-4" type="email" name="" id="" placeholder="Email" />
                    <textarea className=" px-20 text-gray-900 pt-10 rounded my-4" name="" placeholder="Type your message" id="" cols="30" rows="10"></textarea>
                    <input className=" rounded cursor-pointer bg-green-400 my-4 px-20 py-5" type="submit" value="SEND" />
                </form>
            </div>
        </div>
    );
};

export default Contact;