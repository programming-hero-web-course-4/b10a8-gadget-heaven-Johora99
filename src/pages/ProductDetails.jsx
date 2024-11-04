import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { addSelectedProducts } from "../localStor";


export default function ProductDetails() {
  const {id} = useParams()
  const data = useLoaderData();
 const [details,setDetails] = useState({});
  useEffect(()=>{
    const findProduct = [...data].find(product=>product.product_id === parseInt(id))
    setDetails(findProduct);
  },[])
  const {product_id,product_title,product_image,category,price,description,specification,availability,rating,brand} = details;
    const handelAddProducts = (id)=>{
       addSelectedProducts(id)
       console.log(id)
    }
  return (
    <div className="h-[500px] w-2/4 mx-auto">
      <div className="bg-white flex items-center w-2/4 p-5 rounded-3xl absolute bottom-16 gap-10">
         <div>
          <img src={product_image} alt="" className="h-[500px]" />
         </div>
         <div>
          <h2 className="text-DarkGunmetal text-3xl font-semibold">{product_title}</h2>
          <p className="text-DarkGunmetal text-opacity-[0.8] text-xl font-semibold my-3">Price: $ {price}</p>
          <button className="text-Green text-sm font-medium  border-[1px] border-Green py-2 px-5 bg-Green bg-opacity-[0.1] rounded-full">In Stock</button>
          <p className="text-DarkGunmetal text-opacity-[0.6] text-lg font-normal my-3">{description}</p>
          <div>
          <p className="text-DarkGunmetal text-lg font-bold">Specification:</p>
           <ul className="my-3">
        {
        specification?.map((item, index) => <li key={index} className="list-decimal list-inside text-DarkGunmetal text-opacity-[0.6] text-lg font-normal">{item}</li>)
        }
         </ul>
          </div>
          <div>
            <p className="text-DarkGunmetal text-lg font-bold">Rating ⭐ </p>
              <div className="flex items-center my-3 gap-5">
                <div className="rating">
               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input
               type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div>
              <p className="text-DarkGunmetal text-opacity-[0.8] text-sm font-medium bg-DarkGunmetal bg-opacity-[0.05] py-2 px-5 rounded-full w-fit">{rating}</p>
            </div>
              </div>
          </div>
          <div className="flex items-center gap-3 my-5">
           <button onClick={()=>handelAddProducts(details)} className="text-white text-lg font-bold bg-Lavender py-2 px-5 rounded-full flex w-fit items-center gap-2">Add To Card <MdOutlineShoppingCart className="text-xl"/> </button>
            <div className="w-10 h-10 bg-white rounded-full border-[1px] border-Gray border-opacity-[0.1] relative">
           <FaRegHeart className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          </div>
         </div>
      </div>
      
    </div>
  )
}
