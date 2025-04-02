import { useEffect, useState } from "react"
import React from 'react'
import gameImg from "../assets/img/location.png"
import Button from './Button'
import CatchFish from './CatchFish'
import Inventory from "./Inventory"

export type fish = {
  name:string,
  imgSrc:string,
  quality:string,
  price:Number,
  chance:Number,

}
export type forShop = {
  name:string,
  imgSrc:string,
  price:Number,
  lowboost?:number,
  highboost?:number,
  lengthboost?:number
}


let InventoryContent : fish[] = [
  {
    name:"test",
    imgSrc:gameImg,
    quality:"Legendary",
    price:99999,
    chance:10

  },
  {
    name:"test",
    imgSrc:gameImg,
    quality:"Legendary",
    price:99999,
    chance:10

  },
  {
    name:"test",
    imgSrc:gameImg,
    quality:"Legendary",
    price:99999,
    chance:10

  },
  {
    name:"test",
    imgSrc:gameImg,
    quality:"Legendary",
    price:99999,
    chance:10

  },
]

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
      <div className="btns">
        <Button width='150px' height='150px' onClickE={shopButton}>Shop</Button>
        <Button width='150px' height='150px' onClickE={invButton}>Inventory</Button>
        <Button width='150px' height='150px' onClickE={catchButton}>Catch</Button>
      </div>
      
      <div className="s-a-i">
        <Inventory invContent={InventoryContent}/>
      </div>


    </section>
  )
}

export default Interface