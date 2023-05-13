const CardIcon = ({icon}) => {
  return (
    <div className=' w-full h-[8rem]'>
        <div className=''>
            <button className=" ease-in duration-100 hover:scale-150 transition-transform">
              <img src={icon} className=' scale-[0.27] drop-shadow-2xl'/>
            </button>
        </div>
    </div>
  )
}

export default CardIcon