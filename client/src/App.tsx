import { RouterProvider, createHashRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BlogPostDetailPage from "./pages/BlogPostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProfilePage from "./pages/ProfilePage";

const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      {
        path: "/post/:postId",
        element: <BlogPostDetailPage />,
      },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/profile/:userId", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
