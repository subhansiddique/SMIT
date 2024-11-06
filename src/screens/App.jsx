
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Chat from "./Chat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {path: "/",element: <Loading />,}, 
    {path: "*",element: <NotFound />,},
    {path: "/home", element: <Home />,},
    {path: "/chat", element: <Chat />,},
    {path: "/login",element: <Login />,},
    {path: "/signup",element: <Signup />,},
  ]);
  return <RouterProvider router={router} />;

}
// routing

