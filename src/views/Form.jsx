import ImageDoggyForm from "../components/dumb/ImageDoggyForm"
import HeaderForm from "../components/dumb/HeaderForm"
import WindowForm from '../components/dumb/WindowForm'
import ContentForm from "../components/smart/ContentForm"
import InputForm from "../components/dumb/InputForm"

const Form = () => {
  return (
    <div className='h-[47rem] w-[76rem] ml-[8rem] mt-6 absolute'>
      <div className=''>
        <WindowForm/>
        <ImageDoggyForm/>
        <ContentForm/>
        <InputForm titulo='Mascota' place='   Nombre de la Mascota'/>
      </div>
    </div>
  )
}

export default Form