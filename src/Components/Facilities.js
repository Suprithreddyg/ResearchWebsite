import { Button } from '@mui/material'
import React from 'react'

export default function Facilities() {

    const handleClick =()=>{
        document.getElementById("arscreen")
    }

  return (
    <div>
        <Button onClick={handleClick} >Ar mode </Button>
    </div>
  )
}
