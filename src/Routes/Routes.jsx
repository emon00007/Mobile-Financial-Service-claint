import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../PageComponent/Home/Home";
import Signup from "../PageComponent/SignUp/Signup";
import Login from "../PageComponent/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signUp',
                element:<Signup></Signup>
            },
            {
                path: '/Login',
                element:<Login></Login>
            }
        ]
    },
]);