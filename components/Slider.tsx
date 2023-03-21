'use client'

import { useState } from "react"

type Props = {
  slides: {
    url: string, title:string
  }[];
}

function Slider({slides}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0) 
    

  return (
    <div>
      <div className="" style={{ backgroundImage:`url(${slides[currentIndex].url})` }}>

      </div>
    </div>
  )
}

export default Slider