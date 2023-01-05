import { removeBlog } from "../../actions/blogsActions";

const deleteBlog = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://ocean-of-blogger-api.onrender.com/blog/${blog._id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(removeBlog(blog));
        }
    };
};

export default deleteBlog;