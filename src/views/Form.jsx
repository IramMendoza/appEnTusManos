import ImageDoggyForm from "../components/dumb/ImageDoggyForm"
import ContentForm from "../components/smart/ContentForm"

const Form = () => {
  return (
    <div className='h-[47rem] w-[67rem] ml-[8rem] mt-6 absolute'>
      <div className=' w-full h-full rounded-[3rem] drop-shadow-2xl'>
        <ContentForm/>
        <ImageDoggyForm/>
      </div>
    </div>
  )
}

export default Form