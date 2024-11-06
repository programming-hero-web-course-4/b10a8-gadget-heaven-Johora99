import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css';

const getSelectedProducts = ()=>{
    const selectedProducts = localStorage.getItem('products');
     if(selectedProducts){
        const existProducts = JSON.parse(selectedProducts);
        return existProducts;
     }else{
        return [];
     }
}


const addSelectedProducts = (id)=>{
 const selectedProducts = getSelectedProducts();
 const findProduct = selectedProducts.find(item => item.product_id === id.product_id) 
 if(findProduct){
   return;
  } else{

     selectedProducts.push(id)
     const allItems = JSON.stringify(selectedProducts);
     localStorage.setItem('products',allItems)
     Toastify({
     text: "Product Successfully Added To Cart",
     gravity: "top",
     position: "center", 
     className: "info",
     style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
   }).showToast();

  }
    

 
}

const getHeartProducts = ()=>{
    const selectedProducts = localStorage.getItem('heart');
     if(selectedProducts){
        const existProducts = JSON.parse(selectedProducts);
        return existProducts;
     }else{
        return [];
     }
}
const addHeartProducts = (id)=>{
 const selectedProducts = getHeartProducts();
 const findProduct = selectedProducts.find(item => item.product_id === id.product_id) 
 if(findProduct) {
 return;
 }else{

    selectedProducts.push(id)
    const allItems = JSON.stringify(selectedProducts);
    localStorage.setItem('heart',allItems)
    Toastify({
     text: "Product Successfully Added To Watchlist",
     gravity: "top",
     position: "center", 
     className: "info",
     style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
   }).showToast();
 }
}
    

const getPrice = () => {
    const selectedProducts = localStorage.getItem('price');
    if (selectedProducts) {
        return JSON.parse(selectedProducts); 
    } else {
        return []; 
    }
};


const addPrice = (id) => {
    const selectedProducts = getPrice(); 
    const findProduct = selectedProducts.find(item => item.product_id === id.product_id); 
    if (findProduct) {
        return;
    }
    selectedProducts.push(id);

    localStorage.setItem('price', JSON.stringify(selectedProducts));
};


export {getSelectedProducts,addSelectedProducts,getHeartProducts,addHeartProducts,getPrice,addPrice}