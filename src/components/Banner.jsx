import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";


export default function Banner() {
    const {pathname} = useLocation();
   const bgBanner = `${pathname === '/' || pathname.startsWith('/category/')? 'rounded-b-[32px]':'rounded-b-[0px]'}`
   const heading = `${pathname === '/' || pathname.startsWith('/category/')?'text-5xl leading-[72px]':'text-3xl mt-3'}`
   const [active,setActive] = useState(null);
   const activeBtn = (id)=>{
     setActive(id)
   }
   let title;
   let btn;
   if(pathname ==='/' || pathname.startsWith('/category/')){
    title = (
      <>
        Upgrade Your Tech Accessorize with 
        <br className="hidden lg:block" /> 
        Gadget Heaven Accessories
      </>
    );
    btn = (
      <>
      <button className="text-lg font-bold text-Lavender bg-white py-2.5 px-5 rounded-full hover:text-white hover:bg-Lavender border-[2px] border-white">Get Started</button>
      </>
    )
    
   }else if(pathname.startsWith('/productDetails/')){

   title = (
      <>
     Product Details
      </>
    )

   }
   else if(pathname === '/dashBoard'){
    title = (
      <>
      Dashboard
      </>
    )
    btn = (
      <>
      <div className="flex items-center gap-5 justify-center">
      <button onClick={()=>activeBtn(1)} className={`text-lg font-bold border-[2px] border-white py-2.5 px-10 rounded-full ${active === 1 ?'bg-white text-Lavender':'bg-Lavender text-white'}`}>Cart</button>
      <button onClick={()=>activeBtn(2)} className={`text-lg font-bold border-[2px] border-white py-2.5 px-10 rounded-full ${active === 2 ? 'bg-white text-Lavender':'bg-Lavender text-white'}`}>Wishlist</button>
      </div>
      </>
    )
   }
   
  return (
    <div className="mx-auto">
        <div className={`hero bg-Lavender  pb-52 ${bgBanner} `}>
  <div className="hero-content text-center">
    <div className="">
      <h1 className={`font-bold text-white  ${heading}`}>{title}</h1>
      <p className="py-6 text-white text-base font-normal">
       Explore the latest gadgets that will take your experience to  the next level. From smart devices to <br className="hidden lg:block" />  the coolest accessories, we have it all!
      </p>
      <div>
       {btn}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
