import { useLoaderData, useLocation, useParams } from "react-router-dom"
import Card from "./Card"
import { useEffect, useState } from "react"
import img from '../assets/icons8-lost-and-found-96.png'

export default function Cards() {
  const {pathname} = useLocation()
  const {categoryId} = useParams()
    const data = useLoaderData()
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
      const findCategoriesItem = [...data].filter(category=> category.category === categoryId);
      setCategories(findCategoriesItem)

    },[data,categoryId])
    if(pathname === '/' || pathname === '/category/All%20Product'){
      return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
       {
        Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <p>No products available</p> 
        )
      }
    </div>
      )
    }else if(categories.length === 0){
      return(
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-7xl text-DarkGunmetal font-bold mb-10">No Data Found</h2>
          <img src={img} alt="" />
        </div>

      )

    }
    else{

      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
           {
            categories.map((item,index) => <Card key={index} item={item}></Card>)
           }
        </div>
      )
    }
}
