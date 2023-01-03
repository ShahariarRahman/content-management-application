import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import addBlogData from '../../redux/thunk/blogs/addBlogData';

const AddBlog = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const date = new Date().toString();

    const tags = [];

    const onSubmit = data => {
        for (const [key, value] of Object.entries(data)) {
            if ((value === true) && (key === "html" || key === "css" || key === "javascript" || key === "reactJs" || key === "nodejs" || key === "expressJs" || key === "mongodb")) {
                tags.push(key);
            };
        };

        const blog = {
            date: date,
            title: data.title,
            tags: tags,
            description: data.description,
            name: data.name,
            img: data.img,
        };
        dispatch(addBlogData(blog));
    };
    return (
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in bg-gray-300">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 mt-8">
                    <div className="w-full max-w-4xl flex">
                        <div className="w-full bg-white p-5 rounded-lg">
                            <h3 className="pt-4 text-2xl text-center font-semibold">Publish a Blog!</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div>
                                        <div className="mb-4 md:mr-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">Title:</label>
                                            <input
                                                defaultValue="ReactJS is better than other javaScript library library" {...register("title")}
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="name"
                                                type="title"
                                                placeholder="Blog Title"
                                            />
                                        </div>
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">Topics:</label>
                                            <div className='select-none text-sm'>

                                                <input
                                                    {...register("html")}
                                                    type="checkbox" name="html" id='html' className='mx-2'
                                                />
                                                <label htmlFor="html">Html</label>

                                                <input
                                                    {...register("css")}
                                                    type="checkbox" name="css" id='css' className='mx-2'
                                                />
                                                <label htmlFor="css">Css</label>

                                                <input
                                                    {...register("javascript")} defaultChecked
                                                    type="checkbox" name="javascript" id='javascript' className='mx-2'
                                                />
                                                <label htmlFor="javascript">JavaScript</label>

                                                <input
                                                    {...register("reactJs")} defaultChecked
                                                    type="checkbox" name="reactJs" id='reactJs' className='mx-2'
                                                />
                                                <label htmlFor="reactJs">ReactJS</label>

                                                <input
                                                    {...register("nodejs")}
                                                    type="checkbox" name="nodejs" id='nodejs' className='mx-2'
                                                />
                                                <label htmlFor="nodejs">NodeJS</label>

                                                <input
                                                    {...register("expressJs")}
                                                    type="checkbox" name="expressJs" id='expressJs' className='mx-2'
                                                />
                                                <label htmlFor="expressJs">ExpressJS</label>

                                                <input
                                                    {...register("mongodb")}
                                                    type="checkbox" name="mongodb" id='mongodb' className='mx-2'
                                                />
                                                <label htmlFor="mongodb">MongoDb</label>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-4 md:mr-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">Author Name</label>
                                            <input
                                                defaultValue="Md. Shahariar Rahman" {...register("name")}
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="name"
                                                type="text"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="img">
                                                Profile Picture
                                            </label>
                                            <input
                                                defaultValue="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100" {...register("img")}
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="img"
                                                type="text"
                                                placeholder="Profile Picture Link"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
                                        Write a Blog
                                    </label>
                                    <textarea
                                        defaultValue="Compared to other frontend frameworks, the React code is easier to maintain and is flexible due to its modular structure. This flexibility, in turn, saves huge amount of time and cost to businesses." {...register("description")}
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        placeholder="Write here ..."
                                        rows={4}
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                        type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </main >
    );
};

export default AddBlog;