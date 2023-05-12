import ImageDoggyForm from "../components/dumb/ImageDoggyForm"
import ContentForm from "../components/smart/ContentForm"
import BgForm from "../components/dumb/BgForm"
import BlurForm from '../components/dumb/BlurForm'
import HeaderForm from "../components/dumb/HeaderForm"

const Form = () => {
  return (
    <div className='h-[47rem] w-[67rem] ml-[8rem] mt-6 absolute'>
      <div className=' w-full h-full rounded-[3rem] bg-teal-700 drop-shadow-2xl'>
        <BgForm/>
        <BlurForm/>
        <ContentForm/>
        <HeaderForm/>
        <ImageDoggyForm/>
      </div>
    </div>
  )
}

export default Form