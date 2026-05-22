import React, { useState } from 'react'

function App() {
  const [count ,setcount] = useState (0)
  function increase(){
    setcount(count +1)
  }
  function decrease(){
    
    if(count > 0){
      setcount(count-1)
    }
  }
  function reset(){
    setcount(0)
  }
  return(
   <div className='main'>
     <div className='container'>
    <h1>Counter App {count}</h1>
    <button onClick={increase}>add</button>
    <button onClick={decrease}>Dcrease</button>
    <button onClick={reset}> Reset</button>
    </div>
   </div>
  )
}

export default App