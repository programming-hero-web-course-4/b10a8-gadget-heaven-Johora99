
import { Outlet, useLoaderData } from "react-router-dom";
import UpLogo from "../components/UpLogo";
import Categories from "../components/Categories";
import Title from "../components/Title";

export default function Home() {
  const categories = useLoaderData()
  return (
    <>
    <div className="sora">
    <UpLogo></UpLogo>
    </div>
    <div>
      <Title></Title>
    </div>
    <div className="flex gap-5 container w-11/12 mx-auto">
    <Categories  categories={categories}></Categories>
    <Outlet></Outlet>
    </div>
    </>
  )
}
