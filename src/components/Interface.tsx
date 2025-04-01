import { useState } from "react"
import React from 'react'
import gameImg from "../assets/img/Location.png"
import Button from './Button'
import CatchFish from './CatchFish'

const Interface = () => {
  const [currState, setCurrState] = useState(0)
  const shopButton = () => {
    setCurrState((prev : any) => prev = 1)
    console.log(currState);
  }
  const invButton = () => {
    setCurrState((prev : any) => prev = -1)
    console.log(currState);
  }
  const catchButton = () => {
    console.log(currState);
    
  }
  return (
    <section className="interface" style={{backgroundImage:`url(${gameImg})`}}>
      <Button width='150px' height='150px' onClickE={shopButton}>Shop</Button>
      <Button width='150px' height='150px' onClickE={invButton}>Inventory</Button>
      <Button width='150px' height='150px' onClickE={catchButton}>Catch</Button>
      <div className="s-a-i"></div>


    </section>
  )
}

export default Interface