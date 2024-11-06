import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img from '../assets/icons8-cosmic-client-64.png'
export default function Client({client}) {
     const {client_id,client_name,client_image,customer_status,product_feedback,rating} = client;
  return (
    <div>
        <div className='text-white bg-white rounded-3xl p-5'>
            <img src={img} alt="" />
             <p className='text-DarkGunmetal text-opacity-[0.6] text-lg font-normal'>{product_feedback}</p>
             <div className='flex justify-between items-center mt-5'>
                <div className='flex items-center gap-3'>
                <img src={client_image} alt="" />
                <div>
                    <p className='text-DarkGunmetal text-base font-medium'>{client_name}</p>
                    <p className='text-DarkGunmetal text-opacity-[0.6] text-sm font-normal'>{customer_status}</p>
                </div>
                </div>
                <div>
                    <p className='text-DarkGunmetal text-base font-medium'>Rating : {rating}</p>
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" />
                    <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 w-5"
                    defaultChecked />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" />
                  </div>
                </div>
             </div>
        </div>
    </div>
  )
}
