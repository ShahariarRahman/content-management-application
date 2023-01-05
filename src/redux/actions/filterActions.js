import { TOGGLE_SORT, TOGGLE_TAGS } from "../actionTypes/actionTypes";

export const toggleTags = (tag) => {
    return {
        type: TOGGLE_TAGS, payload: tag,
    };
};
export const toggleSort = (time) => {
    return {
        type: TOGGLE_SORT, payload: time,
    };
};