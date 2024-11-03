import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import ProductDetails from "../pages/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[{
        path:"/",
        element:<Home></Home>
    },
    {
      path:"/productDetails",
      element:<ProductDetails></ProductDetails>

    },
    {
        path:"/dashBoard",
        element:<DashBoard></DashBoard>
    }
]
  },
]);


export default router