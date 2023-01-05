import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../../components/BlogCard';
import { FcSearch } from 'react-icons/fc';

const History = () => {
    const history = useSelector(state => state.blog.history);
    let content;
    if (history.length) {
        content = <div
            className='max-w-screen-xl mx-auto grid lg:grid-cols-2 xl:grid-cols-3 gap-5 px-5 2xl:px-0'
        >
            {history.map(blog => <BlogCard key={blog._id} blog={blog} />)}
        </div>;
    }
    else {
        content = <div>
            <h2 className='text-center text-gray-400 flex justify-center items-center'>
                <span className='mr-2'>No Reading History</span>
                <FcSearch className='text-lg mr-2' />
                <span className=''> Found !</span>
            </h2>
        </div>;
    };
    return (
        <div className='mb-12 mx-5 mt-5'>
            {content}
        </div>
    );
};

export default History;