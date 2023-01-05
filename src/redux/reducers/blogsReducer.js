import { ADD_CONTENT, ADD_HISTORY, GET_CONTENT, DELETE_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    history: [],
};
const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                blogs: action.payload,
            };
        case ADD_CONTENT:
            return {
                ...state,
                blogs: [
                    ...state.blogs,
                    action.payload,
                ],
            };
        case UPDATE_CONTENT:
            const newBlog = state.blogs.filter(blog => blog._id !== action.payload._id);
            return {
                ...state,
                blogs: [
                    ...newBlog,
                    action.payload,
                ],
            };
        case DELETE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload._id),
            };
        case ADD_HISTORY:
            const selectedHistory = state.history.find(blog => blog._id === action.payload._id);
            if (selectedHistory) {
                const newHistory = state.history.filter(blog => blog._id !== action.payload._id);
                return {
                    ...state,
                    history: [
                        action.payload,
                        ...newHistory,
                    ],
                };
            };
            return {
                ...state,
                history: [
                    action.payload,
                    ...state.history,
                ],
            };

        default:
            return state;
    };
};

export default blogsReducer;