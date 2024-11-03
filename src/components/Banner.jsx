import { useLocation } from "react-router-dom";


export default function Banner() {
    const {pathname} = useLocation();
   const bgBanner = `${pathname === '/'? 'rounded-b-[32px]':'rounded-b-[0px]'}`
   const heading = `${pathname === '/'?'text-5xl leading-[72px]':'text-3xl mt-3'}`
   let title;
   if(pathname ==='/'){
    title = (
      <>
        Upgrade Your Tech Accessorize with 
        <br className="hidden lg:block" /> 
        Gadget Heaven Accessories
      </>
    );
    
   }else if(pathname === '/productDetails'){

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
      <button className="text-lg font-bold text-Lavender bg-white py-2.5 px-5 rounded-full">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}
