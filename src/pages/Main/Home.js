import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../../components/BlogCard';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';

const Home = () => {
    const blogs = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogsData());
    }, [dispatch]);
    return (
        <div className='mb-12'>
            <div className="w-full shadow p-5 bg-white sticky top-0">
                <div className="xl:flex justify-between">
                    <div className='lg:flex justify-center items-center m-2'>
                        <p className="font-medium mr-3 mt-2 whitespace-nowrap"> Filter By : </p>
                        <div className='flex-auto space-x-4 space-y-2'>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md">ReactJS </button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md">JavaScript </button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md">HTML</button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md">CSS</button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md">MongoDb</button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md">ExpressJS</button>
                            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md">NodeJS</button>
                        </div>
                    </div>
                    <div className='lg:flex items-center m-2'>
                        <p className="font-medium mr-3"> Sort By: </p>
                        <select className="px-8 py-3 font-medium rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-gray-800">
                            <option value="1">Latest Upload</option>
                            <option value="2">Oldest First</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-2xl grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-5 mt-5'>
                {blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
            </div>
        </div>
    );
};

export default Home;