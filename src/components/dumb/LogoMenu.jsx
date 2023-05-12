import PerritologoBlanco from '../../assets/PerritologoBlanco.png'

const LogoMenu = () => {
  return (
    <div className=' w-[6rem] h-[8rem] ml-4'>
        <div className=' bg-teal-700 rounded-3xl'>
            <img src={PerritologoBlanco} className=' scale-[0.5]'/>
        </div>
    </div>
  )
}

export default LogoMenu
