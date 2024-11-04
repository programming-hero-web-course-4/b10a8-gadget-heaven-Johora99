import { Link } from "react-router-dom";


export default function Card({item}) {

    const {product_id,product_title,product_image,category,price,description,specification,availability,rating,brand} = item;
  return (
    <div className="">
        <div className="card w-full bg-white border-[1px] border-Lavender p-5">
  <figure className="bg-Gray]">
    <img
      src={product_image}
      alt="Shoes" className="w-full h-[280px] rounded-xl"/>
  </figure>
  <div className="p-5">
    <h3 className="text-DarkGunmetal text-2xl font-semibold">{product_title}</h3>
    <p className="text-DarkGunmetal text-xl font-medium text-opacity-[0.6] my-3">Price: {price}</p>
    <div>
        <Link to={`/productDetails/${product_id} `} className="text-Lavender text-lg font-semibold border-[2px] border-Lavender py-2 px-5 rounded-full hover:text-white hover:bg-Lavender">View Details</Link>
    </div>
  </div>
</div>
    </div>
  )
}
