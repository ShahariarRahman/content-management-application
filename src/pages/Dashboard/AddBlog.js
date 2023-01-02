import React from 'react';

const AddBlog = () => {
    return (
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in bg-gray-300">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 mt-8">
                    <div className="w-full max-w-4xl flex">
                        <div className="w-full bg-white p-5 rounded-lg">
                            <h3 className="pt-4 text-2xl text-center font-semibold">Publish a Blog!</h3>
                            <form className="px-8 pt-6 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div>
                                        <div className="mb-4 md:mr-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">Title:</label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                placeholder="Blog Title"
                                            />
                                        </div>
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">Topics:</label>
                                            <div className='select-none text-sm'>
                                                <input type="checkbox" name="reactJS" id='reactJS' className='mx-2' />
                                                <label htmlFor="reactJS">ReactJS</label>
                                                <input type="checkbox" name="javaScript" id='javaScript' className='mx-2' />
                                                <label htmlFor="javaScript">JavaScript</label>
                                                <input type="checkbox" name="html" id='html' className='mx-2' />
                                                <label htmlFor="html">Html</label>
                                                <input type="checkbox" name="css" id='css' className='mx-2' />
                                                <label htmlFor="css">Css</label>
                                                <input type="checkbox" name="mongodb" id='mongodb' className='mx-2' />
                                                <label htmlFor="mongodb">MongoDb</label>
                                                <input type="checkbox" name="expressJS" id='expressJS' className='mx-2' />
                                                <label htmlFor="expressJS">ExpressJS</label>
                                                <input type="checkbox" name="nodeJS" id='nodeJS' className='mx-2' />
                                                <label htmlFor="nodeJS">NodeJS</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-4 md:mr-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">Author Name</label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                                Profile Picture
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                type="text"
                                                placeholder="Profile Picture Link"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Write a Blog
                                    </label>
                                    <textArea
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        placeholder="Write here ..."
                                        rows={3}
                                    >

                                    </textArea>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                        type="button">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default AddBlog;