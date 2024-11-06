import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import ProductDetails from "../pages/ProductDetails";
import Cards from "../components/Cards";
import Statistic from "../pages/Statistic";
import Cart from "../components/Cart";
import WatchList from "../components/WatchList";
import ErrorPage from "../pages/ErrorPage";
import DiscountProducts from "../pages/ClientTestimonial";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
        path:"/",
        loader:()=> fetch ('/categories.json'),
        element:<Home></Home>,
        children:[
          {
           path:"/",
          loader:()=> fetch('/alldata.json'),
           element:<Cards></Cards>
          },
          {
          path:"/category/:categoryId",
          loader:()=> fetch('/alldata.json'),
          element:<Cards></Cards>,  
        },
      ]
    },
    {
      path:"/productDetails/:id",
       loader:()=> fetch('/alldata.json'),
      element:<ProductDetails></ProductDetails>

    },
    {
        path:"/dashBoard",
        loader:()=> fetch('/alldata.json'),
        element:<DashBoard></DashBoard>,
        children:[
          {
            path:"cart",
             loader:()=> fetch('/public/alldata.json'),
            element:<Cart></Cart>
          },
          {
            path:"watchList",
             loader:()=> fetch('/public/alldata.json'),
            element:<WatchList></WatchList>
          },
        ]
    },
    {
      path:"/statistic",
      element:<Statistic></Statistic>
    },
    {
      path:"/clientTestimonial",
      loader:()=>fetch('/clientdata.json'),
      element:<DiscountProducts></DiscountProducts>
    }
    
    

]
  },
]);


export default router