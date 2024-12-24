import { createBrowserRouter } from "react-router";
import AppLayout from "./layout/layout";
import CategoryLists from "./pages/category-list/category-lists";
import PostByCategory from "./pages/post-by-category/post-by-category";
import PostDetails from "./pages/post-details/post-details";

type Router = ReturnType<typeof createBrowserRouter>;

export const router: Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <CategoryLists /> },
      {
        path: "/:id",
        element: <PostByCategory />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
      },
    ],
  },
]);
