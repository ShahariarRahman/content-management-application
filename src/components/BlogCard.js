import { formatDistanceToNowStrict } from 'date-fns';
import React from 'react';
import { MdEmojiObjects } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addHistory } from '../redux/actions/blogsActions';
import { toggleTags } from '../redux/actions/filterActions';

const BlogCard = ({ blog }) => {
    const dispatch = useDispatch();
    const { _id, date, description, img, name, tags, title, } = blog || {};

    const time = formatDistanceToNowStrict(new Date(date))

    const fixedWordLength = (sentence, wordLen) => {
        if (sentence.split(" ").length > wordLen) {
            return `${sentence.split(" ", wordLen).join(" ")} ...`;
        };
        return sentence;
    };
    return (
        <div className="max-w-lg w-full lg:max-w-full lg:flex mx-auto">
            <div className="border w-full border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal rounded-lg">
                <div className="mb-8">
                    <h2 title={title} className="text-gray-900 font-bold text-xl mb-2">{fixedWordLength(title, 5)}</h2>
                    <div className='flex items-center my-2'>
                        < MdEmojiObjects />
                        <p className="ml-2 text-sm text-gray-600 flex items-center">
                            {tags.map((tag, i) => <span
                                key={i}
                                className="pr-2 hover:underline capitalize font-semibold"
                            >
                                <button onClick={() => dispatch(toggleTags(tag))} >
                                    {tag}
                                </button>
                            </span>)}
                        </p>
                    </div>
                    <p title={description} className="text-gray-700 text-base">{fixedWordLength(description, 10)}</p>
                </div>
                <div className="flex flex-row-reverse items-center justify-between">
                    <div className='flex items-center'>
                        <img className="w-10 h-10 object-cover rounded-full mr-4" src={img} alt="Avatar of Jonathan Reinink" />
                        <div className="text-sm">
                            <div>
                                <p className="text-gray-900 leading-none">{name}</p>
                                <p className="text-gray-600">{time} ago</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/blog/${_id}`}
                        onClick={() => dispatch(addHistory(blog))}
                    >
                        <button className='text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;