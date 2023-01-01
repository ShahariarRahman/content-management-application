import React from 'react';
import BlogCard from '../../components/BlogCard';

const Home = () => {
    return (
        <div className='flex justify-center'>
            <div className='max-w-screen-2xl grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-5 mt-5'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};

export default Home;