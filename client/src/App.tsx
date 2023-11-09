import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BlogPostDetail from "./pages/BlogPostDetail";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/post/:postTitle", element: <BlogPostDetail /> },
      { path: "/categories", element: <Categories /> },
      { path: "/profile/:userId", element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
