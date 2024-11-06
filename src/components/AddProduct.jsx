import { RxCross2 } from "react-icons/rx";

export default function AddProduct({item}) {
     const {product_title,product_image,price,description} = item;
  return (
    <div className="bg-white flex gap-10 mb-5 rounded-2xl p-5">
        <div>
            <img src={product_image} alt="" className="w-[200px] h-[125px]"/>
        </div>
        <div className="flex justify-between">
            <div>
            <h3 className="text-DarkGunmetal text-2xl font-semibold">{product_title}</h3>
            <p className="text-DarkGunmetal text-opacity-[0.6] text-lg font-normal my-3">{description}</p>
            <p className="text-DarkGunmetal text-opacity-[0.8] text-xl font-semibold">Price: $ {price}</p>
            </div>
        </div>
            <div className="ml-auto w-9 h-9 border-[1px] border-red-600 rounded-full relative">
             <RxCross2 className="text-red-600 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
    </div>
  )
}
