import upImg from '../assets/banner.jpg'

export default function UpLogo() {
  return (
    <div className='w-2/3 mx-auto'>
        <div className='w-2/3 mx-auto border-[2px] border-white rounded-[32px] bg-white bg-opacity-[0.3] p-3 absolute -bottom-36'>
            <img src={upImg} alt="" className='w-full h-[500px] rounded-3xl' />
        </div>
    </div>
  )
}
