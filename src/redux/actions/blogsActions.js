import { ADD_CONTENT, ADD_HISTORY, GET_CONTENT, DELETE_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

export const loadBlogs = (blogs) => {
    return {
        type: GET_CONTENT, payload: blogs,
    };
};
export const addBlog = (blog) => {
    return {
        type: ADD_CONTENT, payload: blog,
    };
};
export const updateBlog = (blog) => {
    return {
        type: UPDATE_CONTENT, payload: blog,
    };
};
export const removeBlog = (blog) => {
    return {
        type: DELETE_CONTENT, payload: blog,
    };
};
export const addHistory = (blog) => {
    return {
        type: ADD_HISTORY, payload: blog,
    };
};