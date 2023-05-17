import Logo from '../dumb/LogoMenu'
import CardIcon from '../Dumb/CardIcon'
import RegisterIcon from '../../assets/registerWhite.png'
import Patients from '../../assets/feetWhite.png'
import StyleMenu from './StyleMenu.module.css'

const Menu = () => {
  return (
    <div className=' mt-6 ml-[3rem] absolute'>
      <div className={StyleMenu.menu}>
          <Logo/>
          <CardIcon icon={RegisterIcon}/>
          <CardIcon icon={Patients}/>
      </div>
    </div>
  )
}

export default Menu
