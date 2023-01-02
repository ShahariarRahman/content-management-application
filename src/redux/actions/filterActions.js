import { TOGGLE_TAGS } from "../actionTypes/actionTypes";

export const toggleTags = (tag) => {
    return {
        type: TOGGLE_TAGS, payload: tag,
    };
};