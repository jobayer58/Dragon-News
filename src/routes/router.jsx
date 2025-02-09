import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'/category/:id',
                element: <CategoryNews></CategoryNews> ,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/new',
        element: <h1>news layout</h1>
    },
    {
        path: 'auth',
        element: <h1>Login</h1>
    },
    {
        path: '*',
        element: <h1>error</h1>
    }
])

export default router;