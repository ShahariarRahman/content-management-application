import React, { useEffect } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';
import deleteBlog from '../../redux/thunk/blogs/deleteBlog';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const blogs = useSelector(state => state.blog.blogs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogsData());
    }, [dispatch]);
    return (
        <main className="flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
            <div className="flex flex-col flex-grow p-4 bg-gray-300">
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full">
                            <div className="overflow-hidden rounded-lg">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-700">
                                        <tr>
                                            <th></th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                Title
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                Published on
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">Update</th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {blogs.map((blog, index) => <tr
                                            key={blog._id}
                                            className="bg-white border-b"
                                        >
                                            <th className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-medium">{index + 1}</th>
                                            <td title={blog.title} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.title.split(" ", 5).join(" ")}...</td>
                                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">{blog.date}</td>
                                            <td className="px-4 py-2" >
                                                <Link to={`updateBlog/${blog._id}`}>
                                                    <button className='text-xl px-3 py-2 whitespace-nowrap text-green-600 border border-green-300 rounded' >
                                                        <BiEdit />
                                                    </button>
                                                </Link>
                                            </td>
                                            <td className="px-4 py-2">
                                                <button
                                                    onClick={() => dispatch(deleteBlog(blog))}
                                                    className='text-xl px-3 py-2 whitespace-nowrap text-red-600 border border-red-300 rounded'
                                                >
                                                    < RiDeleteBin2Line />
                                                </button>
                                            </td>
                                        </tr >
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogList;