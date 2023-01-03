import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../../components/BlogCard';

const History = () => {
    const history = useSelector(state => state.blog.history);
    return (
        <div className='mb-12'>
            <div className='max-w-screen-2xl grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-5 mt-5'>
                {history.map(blog => <BlogCard key={blog._id} blog={blog} />)}
            </div>
        </div>
    );
};

export default History;