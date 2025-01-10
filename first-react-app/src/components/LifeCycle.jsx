import React, {useEffect, useState} from 'react'

const LifeCycle = () => {
    const {name,setName} = useState('')

    useEffect(()=>{
        console.log("Component will mount")
    })


  return (
    <div>
      compont mounte
    </div>
  )
}

export default LifeCycle
