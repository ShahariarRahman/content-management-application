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
    const { date, description, img, name, tags, title, } = blog;

    return (
        <div className="px-5 mt-2">
            <div className="max-w-7xl mx-auto border border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal rounded-lg">
                <div className="mb-2">
                    <div className='flex font-semibold text-xl'>
                        <div className="w-10 h-10 bg-black rounded-full mr-2 grid place-content-center overflow-hidden">
                            <img className="w-16 h-16 object-contain" src={img} alt="Avatar of Jonathan Reinink" />
                        </div>
                        <p className="text-gray-900 leading-none mt-2">{name}</p>
                    </div>
                    <div className='flex items-center mt-3'>
                        < MdEmojiObjects />
                        <p className="ml-2 text-sm text-gray-600 flex items-center">
                            {tags.map((tag, i) => <span
                                key={i}
                                className="pr-2 hover:underline"
                            >
                                <a href={`https://www.google.com/search?q=${tag}`} target="blank">{tag}</a>
                            </span>)}
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-6 mb-2'>
                    <div className='col-span-5'>
                        <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>
                    <div className="text-sm flex justify-end items-end">
                        <p className="text-gray-600">Publish On : {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;