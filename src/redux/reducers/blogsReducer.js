import { ADD_BLOG, ADD_HISTORY, LOAD_BLOGS, REMOVE_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    history: [],
};
const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOGS:
            return {
                ...state,
                blogs: action.payload,
            };
        case ADD_BLOG:
            return {
                ...state,
                blogs: [
                    ...state.blogs,
                    action.payload,
                ],
            };
        case REMOVE_BLOG:
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