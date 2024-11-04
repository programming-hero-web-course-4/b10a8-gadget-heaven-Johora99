import { useLoaderData, useLocation } from "react-router-dom";
import Banner from "./Banner";
import Nav from "./Nav";


export default function Header() {
    const {pathname} = useLocation();
    const bgBorder = `${pathname === '/' || pathname.startsWith('/category/') ?'mt-10 border-[2px] border-Snow w-11/12 p-2':'w-full'}`
  return (
    <div className={` mx-auto  rounded-[32px] relative ${bgBorder}`}>
        <div className="">
        <Nav></Nav>
        <Banner></Banner>

        </div>
    </div>
  )
}
