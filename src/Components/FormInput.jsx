import React from 'react'

const FormInput = ({type, placeholder, value, onChange}) => {
  return (
    <div className='container p-0 mb-4'>
      <input 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange} 
      className='form-control'/>
    </div>
  )
}

export default FormInput