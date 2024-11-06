
import { useEffect } from 'react'
import img from '../assets/icons8-lost-and-found-96.png'
export default function Statistic() {
   useEffect(() => {
    document.title = "Statistic";
  }, []);
  return (
    <div className='container w-11/12 mx-auto pt-20'>
        <div className='w-fit mx-auto'>
        <h2 className='text-Lavender text-7xl font-bold'>No Data Found</h2>
        <img src={img} alt="" className='mx-auto mt-10' />

        </div>
    </div>
  )
}
