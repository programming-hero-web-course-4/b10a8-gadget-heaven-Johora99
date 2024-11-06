

import React, { forwardRef, useEffect, useState } from "react";
import img from '../assets/Group.png'
import { getPrice } from "../localStor";
const Modal = forwardRef(({ closeModal}, ref) => {
    const [prices,setPrices] = useState([]);
    useEffect(()=>{
        const allPriceData = getPrice();
        setPrices(allPriceData);
    },[])
     const modalPrice = prices.map(item=>item.price)
      const totalPrice = modalPrice.reduce((acc, price) => acc + price, 0)
     
    return (

        <dialog ref={ref} className="modal">
            <div className="modal-box text-center">
                <img src={img} alt="" className="mx-auto"/>
                <h2 className="text-DarkGunmetal text-4xl font-bold mt-3 mb-5">Payment SuccessFully</h2>
                <div className="w-full border-b-[1px] border-DarkGunmetal border-opacity-[0.1]"></div>
                <p className="text-DarkGunmetal text-opacity-[0.5] text-lg font-medium mt-5">Thanks For Purchasing</p>
                <p className="text-DarkGunmetal text-lg mt-3 font-medium">Total : ${totalPrice}</p>
                <div className="modal-action">
                    <button className="text-white text-lg font-bold bg-Lavender py-2.5 px-8 rounded-full mx-auto" onClick={closeModal}>Close</button>
                </div>
            </div>
        </dialog>
    );
});

export default Modal;
