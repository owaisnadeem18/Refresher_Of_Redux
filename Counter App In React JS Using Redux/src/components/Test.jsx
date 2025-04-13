import React from 'react'
import { useSelector } from 'react-redux'

const Test = () => {

    const data = useSelector(state => state)


  return (
    <div>
      <h2>
        The Value of Counter is : {data.value} 
      </h2>
    </div>
  )
}

export default Test
