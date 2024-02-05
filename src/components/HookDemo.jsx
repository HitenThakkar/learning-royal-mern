import React from 'react'
import {useEffect, useState } from 'react'

export const HookDemo = () => {

    const [count, setcount] = useState(0)
    useEffect(() => {
      console.log("UseEffect Called");
    },[])
    

  return (

    <div>
        <button onClick={()=>setcount(count+1)}>Click me</button> &nbsp;
        {count}

    </div>
  )
}
