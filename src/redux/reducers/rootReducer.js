import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";

const rootReducer = combineReducers({
    blogs: blogsReducer,

});

export default rootReducer;