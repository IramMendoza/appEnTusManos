import Logo from '../dumb/LogoMenu'
import CardIcon from '../dumb/CardIcon'
import RegisterIcon from '../../assets/registerWhite.png'
import Patients from '../../assets/feetWhite.png'

const Menu = () => {
  return (
    <div className=' h-[45rem] w-[8rem] mt-12 absolute'>
      <div className=' relative h-full w-full flex flex-col'>
          <Logo/>
          <CardIcon icon={RegisterIcon}/>
          <CardIcon icon={Patients}/>
      </div>
    </div>
  )
}

export default Menu
