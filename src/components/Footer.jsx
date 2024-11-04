

export default function Footer() {
  return (
    <div className="bg-white pt-20 pb-10">
      <div className="container w-11/12 mx-auto">

      <div className="text-center">
        <h3 className="text-DarkGunmetal text-3xl font-bold mb-3">Gadget Heaven</h3>
        <p className="text-DarkGunmetal text-opacity-[0.6] text-base font-medium">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="border-b-[1px] border-DarkGunmetal border-opacity-[0.1] my-5"></div>
      <div className="flex justify-around">
        <div>
        <p className="text-DarkGunmetal text-lg font-bold mb-3 text-center">Services</p>
        <ul className="*:text-DarkGunmetal *:text-opacity-[0.6] *:text-base *:font-normal *:mb-2 *:text-center">
         <li><a href="">Product Support</a></li>
         <li><a href="">Order Tracking</a></li>
         <li><a href="">Shipping & Delivery</a></li>
         <li><a href="">Returns</a></li>
        </ul>
        </div>
        <div>
        <p className="text-DarkGunmetal text-lg font-bold mb-3 text-center">Company</p>
        <ul className="*:text-DarkGunmetal *:text-opacity-[0.6] *:text-base *:font-normal *:mb-2 *:text-center">
         <li><a href="">About Us</a></li>
         <li><a href="">Careers</a></li>
         <li><a href="">Contact</a></li>
        </ul>
        </div>
        <div>
        <p className="text-DarkGunmetal text-lg font-bold mb-3 text-center">Legal</p>
        <ul className="*:text-DarkGunmetal *:text-opacity-[0.6] *:text-base *:font-normal *:mb-2 *:text-center">
         <li><a href="">Terms of Service</a></li>
         <li><a href="">Privacy Policy</a></li>
         <li><a href="">Cookie Policy</a></li>
        </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
