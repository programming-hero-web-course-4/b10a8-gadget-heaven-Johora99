import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContextIdProvider } from "../pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import { ActiveSectionProvider } from "../components/Banner";


export default function MainLayout() {
  return (
  
    <>
    <ActiveSectionProvider>
    <ContextIdProvider>
    <div className="bg-LightGray pb-20 flex flex-col">
    {/* navbar */}
    <Header></Header>
    {/* outlet */}
    <Outlet></Outlet>
      
    </div>
    {/* footer */}
    <Footer></Footer>
     <ToastContainer></ToastContainer>
     
    </ContextIdProvider>
    </ActiveSectionProvider>
    </>
  )
}
