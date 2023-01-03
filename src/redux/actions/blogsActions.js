import { ADD_HISTORY, LOAD_BLOGS } from "../actionTypes/actionTypes";

export const loadBlogs = (blogs) => {
    return {
        type: LOAD_BLOGS, payload: blogs,
    };
};
export const addHistory = (blog) => {
    return {
        type: ADD_HISTORY, payload: blog,
    };
};