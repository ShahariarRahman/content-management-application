import { ADD_BLOG, ADD_HISTORY, LOAD_BLOGS } from "../actionTypes/actionTypes";

export const loadBlogs = (blogs) => {
    return {
        type: LOAD_BLOGS, payload: blogs,
    };
};
export const addBlog = (blog) => {
    return {
        type: ADD_BLOG, payload: blog,
    };
};
export const addHistory = (blog) => {
    return {
        type: ADD_HISTORY, payload: blog,
    };
};