import React from 'react'
import { useState, useEffect } from 'react'

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true)

    useEffect(()=>{

        const online = ()=>setIsOnline(true)
        const offline = ()=> setIsOnline(false)

window.addEventListener("online", online )
window.addEventListener("offline", offline )
    }, [])

  return isOnline;
}

export default useOnline