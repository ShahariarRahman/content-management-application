import { TOGGLE_SORT, TOGGLE_TAGS } from "../actionTypes/actionTypes";

const initialState = {
    filter: {
        tags: [],
    },
    sort: {
        time: "latest",
    },
};
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SORT:
            return {
                ...state,
                sort: {
                    ...state.sort,
                    time: action.payload,
                },
            };
        case TOGGLE_TAGS:
            const selectedTags = state.filter.tags.includes(action.payload);
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