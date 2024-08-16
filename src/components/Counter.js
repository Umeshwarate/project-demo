import React, { useState } from 'react'

const Counter = () => {
    let[count, setCount] = useState(0);
    const incrementHandl = () =>{
        setCount(count+1)
    }
    const decreaseHandl = () =>{
        if(count != 0)
        setCount(count - 1)
    }
  return (
    <div>
      <div>Counter : {count}</div>
      <button onClick={incrementHandl}>Increase</button>
      <button onClick={decreaseHandl}>Decrease</button>
    </div>
  )
}

export default Counter
