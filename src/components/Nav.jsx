import { NavLink, useLocation } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export default function Nav() {
    const {pathname} = useLocation()
   const navStyle = `${pathname === '/'? 'bg-Lavender  pt-5 rounded-t-[32px]':'bg-white'}`;
   const navLink = `${pathname === '/'? 'text-white':'text-Gray text-opacity-[0.7]'}`
   const logo = `${pathname === '/'? 'text-white':'text-Gray'}`
    const navItems = <>
    <NavLink to="/" className={navLink}>Home</NavLink>
    <NavLink className={navLink}>Statistics</NavLink>
    <NavLink to="/dashBoard" className={navLink}>Dashboard</NavLink>

    </>
  return (
    <div className={`mx-auto sora  ${navStyle}`}>
        <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className={`menu menu-sm dropdown-content bg-Lavender rounded-box z-[1] mt-3 w-52 p-2 shadow *:text-base *:font-medium`}>
          {navItems}
      </ul>
    </div>
    <h3 className={`text-xl font-bold ${logo}`}>Gadget Heaven</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 *:text-base *:font-medium gap-10">
        {navItems}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <div className="w-10 h-10 bg-white rounded-full border-[1px] border-Gray border-opacity-[0.1] relative">
    <MdOutlineShoppingCart className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
    <div className="w-10 h-10 bg-white rounded-full border-[1px] border-Gray border-opacity-[0.1] relative">
   <FaRegHeart  className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>
</div>
    </div>
  )
}
