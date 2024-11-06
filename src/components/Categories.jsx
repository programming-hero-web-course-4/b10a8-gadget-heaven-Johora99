import { useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function Categories({categories}) {
    const [active, setActive] = useState(1);
    const handleActiveBtn = (id) => {
        setActive(id);
    };
    const safeCategories = Array.isArray(categories) ? categories : [];

    return (
        <div className="flex flex-col bg-white p-5 rounded-2xl border-[1px] border-DarkGunmetal border-opacity-[0.1] gap-3 h-fit">
            {
                safeCategories.map((category) => (
                    <button 
                        key={category.id} 
                        onClick={() => handleActiveBtn(category.id)} 
                        className={`${active === category.id ? ' text-white bg-Lavender text-lg font-medium py-2 px-5 rounded-full' : 'text-DarkGunmetal text-opacity-[0.6] bg-DarkGunmetal bg-opacity-[0.05] py-2 px-5 rounded-full text-lg font-medium'}`}
                    >
                        <Link to={`/category/${category.name}`}>{category.name}</Link>
                    </button>
                ))
            }
        </div>
    );
}
