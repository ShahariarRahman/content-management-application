import React from 'react';
import { MdEmojiObjects } from 'react-icons/md';

const BlogCard = ({ blog }) => {
    const { _id, date, description, img, name, tags, title, } = blog || {};
    return (
        <div className="max-w-lg w-full lg:max-w-full lg:flex">
            <div className="border border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal rounded-lg">
                <div className="mb-8">
                    <div className='flex items-center'>
                        < MdEmojiObjects />
                        <p className="ml-2 text-sm text-gray-600 flex items-center">{tags || "Topics"}</p>
                    </div>
                    <div className="text-gray-900 font-bold text-xl mb-2">{title || "ReactJS is better than other javaScript library library"}</div>
                    <p className="text-gray-700 text-base">{description || "Compared to other frontend frameworks, the React code is easier to maintain and is flexible due to its modular structure. This flexibility, in turn, saves huge amount of time and cost to businesses."}</p>
                </div>
                <div className="flex flex-row-reverse items-center justify-between">
                    <div className='flex items-center'>
                        <div className="w-10 h-10 bg-black rounded-full mr-4 grid place-content-center overflow-hidden">
                            <img className="w-16 h-16 object-contain" src={img || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100"} alt="Avatar of Jonathan Reinink" />
                        </div>
                        <div className="text-sm">
                            <div>
                                <p className="text-gray-900 leading-none">{name || "Md. Shahariar Rahman"}</p>
                                <p className="text-gray-600">{date || "2023-jan-01"}</p>
                            </div>
                        </div>
                    </div>
                    <button className='text-white bg-gray-700 px-4 py-2 rounded-lg'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;