import React from 'react';

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
                                                #
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                First
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                Last
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                Handle
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                Mark
                                            </td>
                                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                Otto
                                            </td>
                                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                @mdo
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