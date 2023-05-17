import React from 'react'
import StyleInput from './StyleInput.module.css'

const InputForm = ({titulo, place}) => {
  return (
    <div className=' absolute ml-[9rem] mt-[15rem]'>
      <div className=' relative h-[8rem] w-[15rem]'>
        <h2 className=' text-center text-slate-800 text-md'>{titulo}</h2>
        <div className=' ml-5 mt-4'>
          <input className={StyleInput.input} placeholder={place}></input>
        </div>
      </div>
    </div>
  )
}

export default InputForm
