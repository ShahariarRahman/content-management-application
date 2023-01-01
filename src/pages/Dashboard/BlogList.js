import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

const BlogList = () => {
    return (
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
            <div className="main-content flex flex-col flex-grow p-4 bg-gray-300">
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full">
                            <div className="overflow-hidden rounded-lg">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-700">
                                        <tr>
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
                                        <tr className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ReactJS is better than other javaScript library library</td>
                                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                2023-jan-01
                                            </td>
                                            <td className="text-xl text-green-600 px-6 py-4 whitespace-nowrap">
                                                <button > <BiEdit />  </button>
                                            </td>
                                            <td className="text-xl text-red-600 px-6 py-4 whitespace-nowrap">
                                                <button>
                                                    < RiDeleteBin2Line />
                                                </button>
                                            </td>
                                        </tr >
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