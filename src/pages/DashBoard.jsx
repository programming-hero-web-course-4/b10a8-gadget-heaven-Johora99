import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { getSelectedProducts } from "../localStor";

export default function DashBoard() {
  const {id} = useParams();
  const [addItems,setAddItems]=useState([]);
  useEffect(()=>{
    const allData = getSelectedProducts();
    setAddItems(allData);
  },[])
   
  return (
    <div className="container w-11/12 mx-auto">
      <div className="flex items-center justify-between">
        <h3>Cart</h3>
        <div className="flex items-center">
          <h3>Total cost:</h3>
          <button>Sort by Price</button>
          <button>Purchase</button>
        </div>
      </div>
    </div>
  )
}
