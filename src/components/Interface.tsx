import { useEffect, useState } from "react"
import React from 'react'
import gameImg from "../assets/img/Location.png"
import Button from './Button'
import CatchFish from './CatchFish'
import Inventory from "./Inventory"
import {ReactComponent as CloseBtn } from '../assets/img/close-svgrepo-com.svg';
import CommonFish1 from '../assets/img/fishes/Common_fish1.jpg';
import CommonFish2 from '../assets/img/fishes/Common_fish2.jpg';
import RareFish1 from '../assets/img/fishes/Rare_fish1.jpg';
import RareFish2 from '../assets/img/fishes/Rare_fish2.jpg';
import SuperrareFish1 from '../assets/img/fishes/Superrare_fish1.jpg';
import SuperrareFish2 from '../assets/img/fishes/Superrare_fish2.jpg';
import EpicFish1 from '../assets/img/fishes/Epic_fish1.jpg';
import EpicFish2 from '../assets/img/fishes/Epic_fish2.jpg';
import LegendaryFish1 from '../assets/img/fishes/Legendary_fish1.jpg';
import LegendaryFish2 from '../assets/img/fishes/Legendary_fish2.jpg';

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
let fish : fish[] = [
  {
    name:"Common fish1",
    imgSrc:CommonFish1,
    quality:"common",
    price:200,
    chance:0.1
    

  },
  {
    name:"Common fish2",
    imgSrc:CommonFish2,
    quality:"common",
    price:200,
    chance:0.1
    

  },
  {
    name:"Rare fish1",
    imgSrc:RareFish1,
    quality:"rare",
    price:200,
    chance:0.1
    

  },
  {
    name:"Rare fish2",
    imgSrc:RareFish2,
    quality:"rare",
    price:200,
    chance:0.1
    

  },
  {
    name:"Super rare fish1",
    imgSrc:SuperrareFish1,
    quality:"Super rare",
    price:200,
    chance:0.1
    

  },
  {
    name:"Super rare fish2",
    imgSrc:SuperrareFish2,
    quality:"Super rare", 
    price:200,
    chance:0.1
    

  },
  {
    name:"Epic fish1",
    imgSrc:EpicFish1,
    quality:"epic",
    price:200,
    chance:0.1
    

  },
  {
    name:"Epic fish2",
    imgSrc:EpicFish2,
    quality:"epic",
    price:200,
    chance:0.1
    

  },
  {
    name:"Legendary fish1",
    imgSrc:LegendaryFish1,
    quality:"legendary",
    price:200,
    chance:0.1
    

  },
  {
    name:"Legendary fish2",
    imgSrc:LegendaryFish2,
    quality:"legendary",
    price:200,
    chance:0.1
    

  },


]



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
  const closeBtn = () => {
    setCurrState((prev : any) => prev = 0)
    console.log(currState)

  }
  return (
    <section className="interface" style={{backgroundImage:`url(${gameImg})`}}>
      <div className="btns">
        <Button width='150px' height='150px' onClickE={shopButton}>Shop</Button>
        <Button width='150px' height='150px' onClickE={invButton}>Inventory</Button>
        <Button width='150px' height='150px' onClickE={catchButton}>Catch</Button>
      </div>
      
      <div className="s-a-i">
        <CloseBtn width={"10%"} height={"5%"} className="close-btn" onClick={closeBtn}/>
        <Inventory invContent={InventoryContent}/>
      </div>


    </section>
  )
}

export default Interface