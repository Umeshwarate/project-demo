import React, { useState } from 'react'

const SimpleForm = (props) => {
  let [uname, setUname] = useState('');
  let [pass, setPass] = useState('');

  let nmHandler=(e)=>{
    setUname(e.target.value);
  }
  let passHandler=(e)=>{
    setPass(e.target.value);
  }

  let submitHandler = (e) =>{
    e.preventDefault();
    let user = {
      name : uname,
      password : pass
    }
    props.onFormSubmit(user);
    console.log('submitHandler'+JSON.stringify(user));
    setUname('')
    setPass('')
    
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        Name : <input type='text' onChange={nmHandler} value={uname}></input> <br/>
        password : <input type='password' onChange={passHandler} value={pass}></input> <br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default SimpleForm
