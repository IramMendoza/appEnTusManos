import React from 'react'
import StyleWindow from './StyleWindowForm.module.css'

const WindowForm = () => {
  //Este componente es sirve solo estiticamente. El componente que tiene todo dentro esta
  //En las view Form
  return (
        <div className=' ml-[5rem] absolute'>
            <div className={StyleWindow.window}>
            </div>
        </div>
  )
}

export default WindowForm
