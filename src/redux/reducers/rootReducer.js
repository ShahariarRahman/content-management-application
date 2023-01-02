import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";

const rootReducer = combineReducers({
    blog: blogsReducer,

});

export default rootReducer;