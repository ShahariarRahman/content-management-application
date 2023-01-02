import React from 'react';
import { MdEmojiObjects } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id, date, description, img, name, tags, title, } = blog || {};
    const { blogId } = useParams();
    return (
        <div className="px-5 mt-2">
            <div className="border border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal rounded-lg">
                <div className="mb-2">
                    <div className='flex font-semibold text-xl'>
                        <div className="w-10 h-10 bg-black rounded-full mr-2 grid place-content-center overflow-hidden">
                            <img className="w-16 h-16 object-contain" src={img || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100"} alt="Avatar of Jonathan Reinink" />
                        </div>
                        <p className="text-gray-900 leading-none mt-2">{name || "Md. Shahariar Rahman"}</p>
                    </div>
                    <div className='flex items-center mt-3'>
                        < MdEmojiObjects />
                        <p className="ml-2 text-gray-600 flex items-center">{tags || "Topics"}</p>
                    </div>
                </div>
                <div className='grid grid-cols-6 mb-8'>
                    <div className='col-span-5'>
                        <div className="text-gray-900 font-bold text-xl mb-2">{title || "ReactJS is better than other javaScript library library"}</div>
                        <p className="text-gray-700 text-base">{description || "Compared to other frontend frameworks, the React code is easier to maintain and is flexible due to its modular structure. This flexibility, in turn, saves huge amount of time and cost to businesses."}</p>
                    </div>
                    <div className="text-sm flex justify-end items-end">
                        <p className="text-gray-600">Publish On : {date || "2023-jan-01"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;