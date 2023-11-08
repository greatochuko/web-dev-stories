import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
