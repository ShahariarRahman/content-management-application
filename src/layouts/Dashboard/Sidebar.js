import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
            <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-700">
                <div className="sidebar-content px-4 py-6">
                    <ul className="flex flex-col w-full">
                        <li className="my-px">
                            <Link to={'/'} className="flex flex-row items-center h-10 px-3 rounded-lg bg-gray-300">
                                <span className="flex items-center justify-center text-lg">
                                    <svg
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </span>
                                <span className="ml-3">Back to Home</span>
                            </Link>
                        </li>
                        <li className="my-px">
                            <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Admin</span>
                        </li>
                        <li className="my-px">
                            <Link to={"/dashboard"} className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                                <span className="flex items-center justify-center text-lg text-gray-400">
                                    <svg
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        />
                                    </svg>
                                </span>
                                <span className="ml-3">Blog List</span>
                            </Link>
                        </li>

                        <li className="my-px">
                            <Link to={"addBlog"} className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                                <span className="flex items-center justify-center text-lg text-green-400">
                                    <svg
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <span className="ml-3">Add Blog</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div >
    );
};

export default Sidebar;