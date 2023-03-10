import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';
import updateBlogData from '../../redux/thunk/blogs/updateBlogData';

const UpdateBlog = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const blogs = useSelector(state => state.blog.blogs);

    const dispatch = useDispatch();

    const { register, handleSubmit, reset } = useForm();

    const blog = blogs.find(blog => blog._id === blogId);
    const { _id, description, img, name, tags, title, } = blog || {};

    useEffect(() => {
        dispatch(loadBlogsData());
        if (blogs.length) {
            let defaultValues = {};
            defaultValues.title = title;
            defaultValues.description = description;
            defaultValues.name = name;
            defaultValues.img = img;
            defaultValues.html = tags?.includes("html");
            defaultValues.css = tags?.includes("css");
            defaultValues.javascript = tags?.includes("javascript");
            defaultValues.reactJs = tags?.includes("reactJs");
            defaultValues.nodejs = tags?.includes("nodejs");
            defaultValues.expressJs = tags?.includes("expressJs");
            defaultValues.mongodb = tags?.includes("mongodb");
            reset({ ...defaultValues });
        };
    }, [dispatch, blogs.length]);


    const onSubmit = data => {
        const date = new Date().toString();
        const newTag = [];
        for (const [key, value] of Object.entries(data)) {
            if ((value === true) && (key === "html" || key === "css" || key === "javascript" || key === "reactJs" || key === "nodejs" || key === "expressJs" || key === "mongodb")) {
                newTag.push(key);
            };
        };

        const blog = {
            _id: _id,
            date: date,
            title: data.title,
            tags: newTag,
            description: data.description,
            name: data.name,
            img: data.img,
        };
        dispatch(updateBlogData(blog, navigate));
    };
    return (
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in bg-gray-300">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 mt-8">
                    <div className="w-full max-w-4xl flex">
                        <div className="w-full bg-white p-5 rounded-lg">
                            <h3 className="pt-4 text-2xl text-center font-semibold">Update Blog!</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div>
                                        <div className="mb-4 md:mr-2">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">Title:</label>
                                            <input
                                                {...register("title")}
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
                                                    {...register("javascript")}
                                                    type="checkbox" name="javascript" id='javascript' className='mx-2'
                                                />
                                                <label htmlFor="javascript">JavaScript</label>

                                                <input
                                                    {...register("reactJs")}
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
                                                {...register("name")}
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
                                                {...register("img")}
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
                                        {...register("description")}
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

export default UpdateBlog;