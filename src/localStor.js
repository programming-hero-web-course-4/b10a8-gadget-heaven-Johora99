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
 if(findProduct) return alert('already')
    
   selectedProducts.push(id)
   const allItems = JSON.stringify(selectedProducts);
   localStorage.setItem('products',allItems)
 

            
  
 
}


export {getSelectedProducts,addSelectedProducts}