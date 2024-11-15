import { createBrowserRouter } from "react-router-dom";
import { Home, PostForm, PostDetail } from "../pages";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/post-form",
        element: <PostForm />,
    },
    {
        path: "/post-detail",
        element: <PostDetail />,
    }
])