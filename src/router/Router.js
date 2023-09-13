import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Contract from "../pages/Contract/Contract";
import Services from "../pages/Services/Services";
import AddService from "../pages/AddService/AddService";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/contract", element: <Contract></Contract>

            },
            {
                path: "/services", element: <Services></Services>,
                loader: async () => fetch("http://localhost:5000/services")
            },
            {
                path: "/addservice", element: <AddService></AddService>
            },
        ]
    }
])