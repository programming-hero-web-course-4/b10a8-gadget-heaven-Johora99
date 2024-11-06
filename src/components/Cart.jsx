import { useEffect, useState, useRef, useContext } from "react";
import { getSelectedProducts } from "../localStor";
import AddProduct from "../components/AddProduct";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { ContextId } from "../pages/ProductDetails";

export default function Cart() {
    const {num,setNum,heartCount,setHeartCount} = useContext(ContextId);

    const [addItems, setAddItems] = useState([]);
    const [active, setActive] = useState(null);
    const [totalPrices, setTotalPrices] = useState(0);
    const [modalPrice,setModalPrice] = useState([])
    const modalRef = useRef(null); 
    const navigate = useNavigate()
    useEffect(() => {
        const allData = getSelectedProducts();
        setAddItems(allData);
    }, []);

    const activeBtn = (id) => {
        setActive(id);
    };

     useEffect(() => {
       
      const prices = Array.isArray(addItems) ? addItems.map((item) => item.price) : [];
        const totalPrice = prices.reduce((acc, price) => acc + price, 0);
        setTotalPrices(totalPrice); 
        
    }, [addItems]);

    const handleSorts = () => {
        const sortPrices = [...addItems].sort((a, b) => b.price - a.price);
        setAddItems(sortPrices);
    };

    const showModal = () => {
        modalRef.current.showModal();
        setAddItems(0);
        setNum(0);
        setHeartCount(0);
    };

    const closeModal = () => {
      modalRef.current.close();
         navigate("/");
    };

    return (
        <div className="container w-11/12 mx-auto">
            <div className="flex items-center justify-between my-10">
                <h3 className="text-Gray text-2xl font-bold">Cart</h3>
                <div className="flex items-center gap-5">
                    <h3 className="text-Gray text-2xl font-bold ">Total cost:$ {totalPrices}</h3>
                    <div className="flex items-center gap-5 justify-center">
                        <button
                            onClick={() => {
                                activeBtn(1);
                                handleSorts();
                            }}
                            className={`text-lg font-medium border-[2px] border-Lavender py-2.5 px-10 rounded-full ${active === 1 ? "bg-Lavender text-white" : "bg-white text-Lavender"}`}
                        >
                            Sort by Price
                        </button>
                        <button
                            onClick={() => {
                                activeBtn(2);
                                showModal(); 
                            }}
                            className={`text-lg font-medium border-[2px] border-Lavender py-2.5 px-10 rounded-full ${active === 2 ? "bg-Lavender text-white" : "bg-white text-Lavender"}`}
                        >
                            Purchase
                        </button>
                    </div>
                </div>
            </div>
           <div>
  {Array.isArray(addItems) && addItems.length > 0 ? (
    addItems.map((item) => (
      <AddProduct item={item} key={item.id} />
    ))
  ) : (
    <p>No items available</p>
  )}
</div>


        
            <Modal closeModal={closeModal} ref={modalRef} modalPrice={modalPrice} />
        </div>
    );
}
