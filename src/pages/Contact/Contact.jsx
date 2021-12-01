import React from 'react';

const Contact = () => {

    const contactFormSubmission = (e) => {
        window.alert('Your messgae has been Send');
    }


    return (
        <div id="contact" className=" bg-gray-900 text-white pb-20">
            <h1 className=" pt-24 pb-5 text-4xl font-bold">Contact Me</h1>
            <hr className="py-1 bg-green-400 w-32 border-none rounded mb-20 mx-auto" />
            <div className="bg-3 w-11/12 lg:w-1/2 mx-auto py-5 lg:py-10 rounded-box">
                <form onSubmit={contactFormSubmission} className="flex flex-col w-11/12 lg:w-5/6 mx-auto" action="">
                    <input required className="rounded text-gray-900 px-5  py-4 my-4" type="text" name="" id="" placeholder="Your Name" />
                    <input required className=" rounded text-gray-900 px-5 py-4 my-4" type="email" name="" id="" placeholder="Email" />
                    <textarea required className=" text-gray-900 px-5 pt-5 rounded my-4" name="" placeholder="Type your message" id="" cols="30" rows="5"></textarea>
                    <input className=" rounded text-gray-900 cursor-pointer bg-green-400 my-4 px-20 py-4" type="submit" value="SEND" />
                </form>
            </div>
        </div>
    );
};

export default Contact;