import { useLoaderData, useLocation, useParams } from "react-router-dom"
import Card from "./Card"
import { useEffect, useState } from "react"

export default function Cards() {
  const {pathname} = useLocation()
  const {categoryId} = useParams()
    const data = useLoaderData()
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
      const findCategoriesItem = [...data].filter(category=> category.category === categoryId);
      console.log(findCategoriesItem)
      setCategories(findCategoriesItem)

    },[data,categoryId])
    if(pathname === '/' || pathname === '/category/All%20Product'){
      return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
       {
        data.map((item,index) => <Card key={index} item={item}></Card>)
       }
    </div>
      )
    }else{

      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
           {
            categories.map((item,index) => <Card key={index} item={item}></Card>)
           }
        </div>
      )
    }
}
