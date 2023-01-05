import { loadBlogs } from "../../actions/blogsActions";

const loadBlogsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://ocean-of-blogger-api.onrender.com/blogs');
        const data = await res.json();
        if (data.length) {
            dispatch(loadBlogs(data));
        };
    };
};

export default loadBlogsData;