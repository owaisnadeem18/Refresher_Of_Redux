import React from 'react'
import { useSelector } from 'react-redux'

const AnotherCounterApp = () => {
    
    const data = useSelector(state=> state)
    console.log(`The value of counter in another component is = ${data}`)
  
    return (
    <h3>
        {data.value}
    </h3>
  )
}

export default AnotherCounterApp
