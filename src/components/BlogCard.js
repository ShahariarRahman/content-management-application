import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div className="max-w-lg w-full lg:max-w-full lg:flex">
            <div className="border border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal rounded-lg">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex flex-row-reverse items-center justify-between">
                    <div className='flex items-center'>
                        <div className="w-10 h-10 bg-black rounded-full mr-4 grid place-content-center overflow-hidden">
                            <img className="w-16 h-16 object-contain" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100" alt="Avatar of Jonathan Reinink" />
                        </div>
                        <div className="text-sm">
                            <div>
                                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                <p className="text-gray-600">Aug 18</p>
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