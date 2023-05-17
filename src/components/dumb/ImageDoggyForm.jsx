import DoggyForm from '../../assets/doggysImgLab.jpeg'
import StyleImage from './ImageShadow.module.css'

const ImageDoggyForm = () => {
  return (
    <div className=' absolute'>
      <div className={StyleImage.image}>
        <img src={DoggyForm} className=' scale-[1.06] mt-16 ml-[46rem]'/>
      </div>
    </div>
  )
}

export default ImageDoggyForm
