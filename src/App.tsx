import { useState } from 'react'
import { css } from '../styled-system/css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <button onClick={()=>setCount((v)=>{return v+1})}>てすと</button>
        <p className={countStyle}>{count}</p>
    </>
  )
}

export default App

const countStyle = css({
  // color:'var(--surface-error-message)', 
  // or
  color:'errorMessage',
  fontSize:24
})