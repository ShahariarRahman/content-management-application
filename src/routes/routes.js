import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main/Main";
import Home from "../pages/Main/Home";
import History from "../pages/Main/History";
import BlogList from "../pages/Dashboard/BlogList";
import AddBlog from "../pages/Dashboard/AddBlog";
import Blog from "../pages/Main/Blog";
import UpdateBlog from "../pages/Dashboard/UpdateBlog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/history",
                element: <History />,
            },
            {
                path: "/blog/:blogId",
                element: <Blog />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <BlogList />,
            },
            {
                path: "addBlog",
                element: <AddBlog />,
            },
            {
                path: "updateBlog/:blogId",
                element: <UpdateBlog />,
            },
        ],
    },
]);


export default router;
