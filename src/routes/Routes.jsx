import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import ProductDetails from "../pages/ProductDetails";
import Cards from "../components/Cards";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[{
        path:"/",
        loader:()=> fetch ('../../public/categories.json'),
        element:<Home></Home>,
        children:[
          {
           path:"/",
          loader:()=> fetch('../../public/alldata.json'),
           element:<Cards></Cards>
          },
          {
          path:"/category/:categoryId",
          loader:()=> fetch('../../public/alldata.json'),
          element:<Cards></Cards>,  
        },
      ]
    },
    {
      path:"/productDetails/:id",
       loader:()=> fetch('../../public/alldata.json'),
      element:<ProductDetails></ProductDetails>

    },
    {
        path:"/dashBoard",
        loader:()=> fetch('../../public/alldata.json'),
        element:<DashBoard></DashBoard>
    },
    
    

]
  },
]);


export default router