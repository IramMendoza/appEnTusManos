import StyleIcon from './StyleIcon.module.css'

const CardIcon = ({icon}) => {
  return (
    <div className=' w-[5rem] ml-5 mt-[3rem] mb-[3rem]'>
        <div className={StyleIcon.icon}>
            <button className="">
              <img src={icon} className=' scale-[0.30] drop-shadow-2xl'/>
            </button>
        </div>
    </div>
  )
}

export default CardIcon