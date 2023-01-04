import { addBlog } from "../../actions/blogsActions";

const addBlogData = (blog, navigate) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/blog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(blog),
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(addBlog({
                _id: data.insertedId,
                ...blog,
            }))
            navigate('/dashboard/');
        };
    };
};

export default addBlogData;