import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import Write from "./pages/Write";
import RootLayout from "./layouts/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/post/:id",
          element: <Post />,
        },
        {
          path: "/posts/:id",
          element: <Posts />,
        },
        {
          path: "/write",
          element: <Write />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
