import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function MainLayout() {
  const data = useLoaderData()
  return (
    <>
    <div className="bg-LightGray pb-20 min-h-screen flex flex-col">
    {/* navbar */}
    <Header></Header>
    {/* outlet */}
    <Outlet></Outlet>

    </div>
    {/* footer */}
    <Footer></Footer>
    </>
  )
}
