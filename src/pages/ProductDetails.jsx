import { createContext, useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { addSelectedProducts, getSelectedProducts,addHeartProducts,getHeartProducts, addPrice } from "../localStor";

// context API ============================
 const ContextId = createContext();
    const ContextIdProvider = ({children})=>{
    const [num,setNum] = useState(0);
    const[heartCount,setHeartCount] = useState(0)
    return <ContextId.Provider value={{num,setNum,heartCount,setHeartCount}}>{children}</ContextId.Provider>
    }

export default function ProductDetails() {
  const {num,setNum,setHeartCount,heartCount} = useContext(ContextId)
  const allItem = getSelectedProducts();
  const allHeat = getHeartProducts()
  const {id} = useParams()
  const data = useLoaderData();
 const [details,setDetails] = useState({});
 const [heart,setHeart] = useState({})
 const[prices,setPrices]=useState([])
  useEffect(()=>{
    const findProduct = [...data].find(product=>product.product_id === parseInt(id))
    setDetails(findProduct);
    setHeart(findProduct);
    setPrices(findProduct)
    

  },[])
  const {product_title,product_image,price,description,specification,rating} = details;


    const handleAddToCard = (id)=>{
         addHeartProducts(id)
          const addToCard = allHeat.find(item=> item.product_id === id.product_id)
          if(addToCard){
            return ('')
          } else{

            const addHeart = heartCount + 1;
            setHeartCount(addHeart)
          }
         

    }

    const handelAddProducts = (id)=>{
     addSelectedProducts(id)
     const addToCard = allItem.find(item=> item.product_id === id.product_id)
    if(addToCard) return ('')
    const addNum = num + 1;
    setNum(addNum);
   
    
       

    }
    const handelProductPrice = (id)=>{
      addPrice(id);
    }
    

  useEffect(() => {
    document.title = "Product Details";
  }, []);

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
           <button onClick={()=>{handelAddProducts(details) ; handelProductPrice(prices)}} className="text-white text-lg font-bold bg-Lavender py-2 px-5 rounded-full flex w-fit items-center gap-2">Add To Card <MdOutlineShoppingCart className="text-xl"/> </button>
            <div onClick={()=>handleAddToCard(heart)}  className="w-10 h-10 bg-white rounded-full border-[1px] border-Gray border-opacity-[0.1] relative cursor-pointer">
           <FaRegHeart className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          </div>
         </div>
      </div>
      
    </div>
  )
}
export { ContextIdProvider, ContextId };