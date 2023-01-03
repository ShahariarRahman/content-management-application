import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../../components/BlogCard';
import { toggleTags } from '../../redux/actions/filterActions';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';

const Home = () => {
    const blogs = useSelector(state => state.blog.blogs);
    const tags = useSelector(state => state.filter.filter.tags);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogsData());
    }, [dispatch]);
    return (
        <div className='mb-12'>
            <div className="w-full shadow p-1 bg-white sticky top-0">
                <div className="xl:flex justify-between">
                    <div className='lg:flex justify-center items-center m-1'>
                        <p className="font-medium mr-3 whitespace-nowrap"> Filter By : </p>
                        <div className='flex-auto space-x-3 space-y-2 lg:space-y-0 font-normal text-sm'>
                            {
                                [
                                    { tag: "reactJs", name: "React Js" },
                                    { tag: "javascript", name: "JavaScript" },
                                    { tag: "html", name: "HTML" },
                                    { tag: "css", name: "CSS" },
                                    { tag: "mongodb", name: "MongoDb" },
                                    { tag: "expressJs", name: "ExpressJS" },
                                    { tag: "nodejs", name: "NodeJS" },
                                ].map((object, i) => <button
                                    key={i}
                                    onClick={() => dispatch(toggleTags(object.tag))}
                                    className={`px-3 py-2 rounded-md ${tags.includes(object.tag) ?
                                        "bg-gray-700 hover:bg-gray-800 text-white" :
                                        "bg-gray-200 hover:bg-gray-300 text-gray-800"}`
                                    }
                                >{object.name}
                                </button>
                                )}
                        </div>
                    </div>
                    <div className='lg:flex items-center m-2'>
                        <p className="font-medium mr-2"> Sort By : </p>
                        <select onChange={(e) => console.log(e.target.value)} className="px-4 py-2 font-medium rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-gray-800">
                            <option value="latest">Latest Upload</option>
                            <option value="oldest">Oldest First</option>
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