import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import HomePageTwo from "../pages/Main/HomePageTwo";
import HomePageThree from "../pages/Main/HomePageThree";
import DashboardPageOne from "../pages/Dashboard/DashboardPageOne";
import DashboardPageTwo from "../pages/Dashboard/DashboardPageTwo";

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
                path: "/page-two",
                element: <HomePageTwo />,
            },
            {
                path: "/page-three",
                element: <HomePageThree />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <Home />,
            },
            {
                path: "page-one",
                element: <DashboardPageOne />,
            },
            {
                path: "page-two",
                element: <DashboardPageTwo />,
            },
        ],
    },
]);


export default router;
