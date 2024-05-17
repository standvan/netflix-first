import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Netflix></Netflix>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path:'/signup',
        element: <SignUp></SignUp>
    },
    {
        path:'/tv',
        element: <h1>TV shows</h1>
    },
    {
        path:'/movies',
        element: <h1>Movies</h1>
    },
    {
        path:'/mylist',
        element: <h1>My list</h1>
    },
    {
        path: '/player',
        element: <Player></Player>
    }
])