import React from 'react'
import SimpleForm from './SimpleForm'

const FromData = () => {
    let formDataHandler = (data)=>{
        let fData = {
            ...data
        }
        console.log('formDataHandler '+fData);
    }
  return (
    <div>
        <h2>Form Date : </h2>
      <SimpleForm onFormSubmit={formDataHandler}></SimpleForm>
    </div>
  )
}

export default FromData
