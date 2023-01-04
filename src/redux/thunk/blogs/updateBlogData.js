import { updateBlog } from "../../actions/blogsActions";

const updateBlogData = (blog, navigate) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/blog', {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(blog),
        });
        const data = await res.json();
        if (data.acknowledged && data.modifiedCount) {
            dispatch(updateBlog(blog));
            navigate('/dashboard/');
        };
    };
};

export default updateBlogData;