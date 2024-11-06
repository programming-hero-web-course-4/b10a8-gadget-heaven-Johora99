
import { useEffect, useState } from "react";
import { getHeartProducts} from "../localStor";
import AddProduct from "../components/AddProduct";

export default function WatchList() {
const [addItems,setAddItems]=useState([]);
    const [active,setActive] = useState(null);
    useEffect(()=>{
    const allData = getHeartProducts()
    setAddItems(allData);
  },[])
  const activeBtn = (id)=>{
    setActive(id)
  }
  const prices = addItems.map(price => (price.price))
    const totalPrice = prices.reduce((acc, price) => acc + price, 0);
    const handleSorts = ()=>{
     const sortPrices = [...addItems].sort((a,b)=> b.price - a.price)
     setAddItems(sortPrices)
    }
  return (
    <div className="container w-11/12 mx-auto">
      <div className="flex items-center justify-between my-10">
        <h3 className="text-Gray text-2xl font-bold">Cart</h3>
        <div className="flex items-center gap-5">
          <h3 className="text-Gray text-2xl font-bold ">Total cost:$ {totalPrice}</h3>
         <div className="flex items-center gap-5 justify-center">
      <button onClick={()=>{activeBtn(1);handleSorts()}} className={`text-lg font-medium border-[2px] border-Lavender py-2.5 px-10 rounded-full ${active === 1 ?'bg-Lavender text-white':'bg-white text-Lavender'}`}>Sort by Price</button>
      <button onClick={()=>activeBtn(2)} className={`text-lg font-medium border-[2px] border-Lavender py-2.5 px-10 rounded-full ${active === 2 ? 'bg-Lavender text-white':'bg-white text-Lavender'}`}>Purchase</button>
      </div>
        </div>
      </div>
      <div>
        {
          addItems.map(item =><AddProduct item={item}></AddProduct>)
        }
      </div>
    </div>
  )
}
