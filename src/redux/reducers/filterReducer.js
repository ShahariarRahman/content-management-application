import { TOGGLE_TAGS } from "../actionTypes/actionTypes";

const initialState = {
    filter: {
        tags: [],
    },
    sort: {
        time: [],
    },
};
const filterReducer = (state = initialState, action) => {
    const selectedTags = state.filter.tags.includes(action.payload);
    switch (action.type) {
        case TOGGLE_TAGS:
            if (selectedTags) {
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        tags: state.filter.tags.filter(tag => tag !== action.payload),
                    },
                };
            };
            return {
                ...state,
                filter: {
                    ...state.filter,
                    tags: [...state.filter.tags, action.payload],
                },
            };
        default:
            return state;
    };
};

export default filterReducer;