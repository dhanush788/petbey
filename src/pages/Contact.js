import React, {useContext} from 'react'
import Landing from '../components/Contact/Landing'
import Form from '../components/Contact/Form'
import { useTheme } from '../context/Theme'

const Contact = () => {
  const {theme,setTheme}=useTheme()
  setTheme(false)
  return (
    <div className='mt-20'>
      <Landing/>
      <Form/>
    </div>
  )
}

export default Contact