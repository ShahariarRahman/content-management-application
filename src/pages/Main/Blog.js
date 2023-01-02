import React, { useEffect } from 'react';
import { MdEmojiObjects } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';

const Blog = () => {
    const blogs = useSelector(state => state.blog.blogs);

    const dispatch = useDispatch();

    const { blogId } = useParams();

    useEffect(() => {
        dispatch(loadBlogsData());
    }, [dispatch]);


    const blog = blogs.find(blog => blog._id === blogId);
    const { date, description, img, name, tags, title, } = blog || {};

    return (
        <div className="px-5 mt-2">
            <div className="max-w-7xl mx-auto border border-gray-400 bg-white flex flex-col justify-between leading-normal rounded-lg">
                <div className='sm:flex justify-around'>
                    <div className='p-5 mx-5'>
                        <div className="text-gray-900 font-bold text-2xl">{title}</div>
                        <div className='flex items-center my-2'>
                            < MdEmojiObjects />
                            <p className="ml-2 text-sm uppercase text-gray-600 flex items-center">
                                {tags && tags.map((tag, i) => <span
                                    key={i}
                                    className="pr-2 hover:underline"
                                >
                                    <a href={`https://www.google.com/search?q=${tag}`} target="blank">{tag}</a>
                                </span>)}
                            </p>
                        </div>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>
                    <div className="text-sm flex flex-col items-center justify-center min-w-max mt-12 sm:mt-0 border-l border-gray-400 p-5">
                        <div className="mb-5">
                            <div className="mr-2 grid place-content-center overflow-hidden">
                                <img className="" src={img} alt="Avatar of Jonathan Reinink" />
                            </div>
                            <div className='text-center mt-4'>
                                <p className="text-gray-600">Author</p>
                                <p className="text-gray-900 text-xl font-semibold">{name}</p>
                                <p className="text-gray-600">Publish On : {date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;