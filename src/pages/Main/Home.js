import React from 'react';
import BlogCard from '../../components/BlogCard';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-5 mx-5 mt-5'>
                <BlogCard />
            </div>
        </div>
    );
};

export default Home;