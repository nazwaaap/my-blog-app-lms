import { createBrowserRouter } from "react-router-dom";
import { Home, PostForm, PostDetail } from "../pages";
import { PostItem, MainLayout } from "../components";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [ 
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/post-form",
                element: <PostForm />
            },
            {
                path: "/post-detail",
                element: <PostDetail />
            },
            // DEBUG
            {
                path: "/post-item",
                element: (
                    <PostItem
                        image="https://picsum.photos/800"
                        title="Image Title"
                        name="Nazwa Pra"
                        date="28 Februari 2004"
                        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                )
            }
        ]
    }
]);