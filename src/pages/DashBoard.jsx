
import { useActiveSection } from "../components/Banner";
import WatchList from "../components/WatchList";
import Cart from "../components/Cart";
import { useEffect } from "react";
export default function DashBoard() {
   const { activeSection, setActiveSection } = useActiveSection()
    useEffect(() => {
    document.title = "DashBoard";
  }, []);
  return (
    <div>
       <div>
        {activeSection === "cart" && <Cart></Cart>}
        {activeSection === "watchlist" &&  <WatchList></WatchList> }
      </div>
    </div>

  )
}

