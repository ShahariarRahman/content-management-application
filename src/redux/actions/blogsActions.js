import { LOAD_BLOGS } from "../actionTypes/actionTypes";

export const loadBlogs = (blogs) => {
    return {
        type: LOAD_BLOGS, payload: blogs,
    };
};