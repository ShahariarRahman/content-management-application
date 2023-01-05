import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../../components/BlogCard';
import { toggleSort, toggleTags } from '../../redux/actions/filterActions';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';

const Home = () => {
    const blogs = useSelector(state => state.blog.blogs);
    const { filter, sort } = useSelector(state => state.filter);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogsData());
    }, [dispatch]);

    let content;
    if (blogs.length && sort.time) {
        content = blogs
            .sort((a, b) => {
                if (sort.time === "oldest") {
                    return new Date(a.date) - new Date(b.date);
                };
                return new Date(b.date) - new Date(a.date);
            }).filter(blog => {
                if (filter.tags.length) {
                    if (blog.tags.length) {
                        const commonTags = blog.tags.filter(tag => filter.tags.includes(tag));
                        return (commonTags.length && (commonTags.length === filter.tags.length));
                    };
                }
                if (!filter.tags.length) {
                    return blog;
                };
                return false;
            })
            .map(blog => <BlogCard key={blog._id} blog={blog} />);
    };
    return (
        <div className='mb-12 max-w-screen-2xl mx-auto'>
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
                                    className={`px-3 py-2 rounded-md ${filter.tags.includes(object.tag) ?
                                        "bg-gray-700 text-white" :
                                        "bg-gray-200 text-gray-800"}`
                                    }
                                >{object.name}
                                </button>
                                )}
                        </div>
                    </div>
                    <div className='lg:flex items-center m-2'>
                        <p className="font-medium mr-2"> Sort By : </p>
                        <select onChange={(e) => dispatch(toggleSort(e.target.value))} className="px-4 py-2 font-medium rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-gray-800">
                            <option value="latest">Latest Upload</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 px-5 2xl:px-0'>
                {content}
            </div>
        </div>
    );
};

export default Home;