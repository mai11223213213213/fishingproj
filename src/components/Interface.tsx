import { useEffect, useState } from "react"
import React from 'react'
import gameImg from "../assets/img/location.png"
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
  price:number,
  chance:number,
  fishSp?:number

}
export type forShop = {
  name:string,
  imgSrc:string,
  price:number,
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
    chance:0.4
    

  },
  {
    name:"Common fish2",
    imgSrc:CommonFish2,
    quality:"common",
    price:2010,
    chance:0.4
    

  },
  {
    name:"Rare fish1",
    imgSrc:RareFish1,
    quality:"rare",
    price:200,
    chance:0.05
    

  },
  {
    name:"Rare fish2",
    imgSrc:RareFish2,
    quality:"rare",
    price:200,
    chance:0.05
    

  },
  {
    name:"Super rare fish1",
    imgSrc:SuperrareFish1,
    quality:"Super rare",
    price:200,
    chance:0.025
    

  },
  {
    name:"Super rare fish2",
    imgSrc:SuperrareFish2,
    quality:"Super rare", 
    price:200,
    chance:0.025
    

  },
  {
    name:"Epic fish1",
    imgSrc:EpicFish1,
    quality:"epic",
    price:200,
    chance:0.015
    

  },
  {
    name:"Epic fish2",
    imgSrc:EpicFish2,
    quality:"epic",
    price:200,
    chance:0.020
    

  },
  {
    name:"Legendary fish1",
    imgSrc:LegendaryFish1,
    quality:"legendary",
    price:200,
    chance:0.01
    

  },
  {
    name:"Legendary fish2",
    imgSrc:LegendaryFish2,
    quality:"legendary",
    price:200,
    chance:0.01
    

  },


]



let inventoryContent : fish[] = [
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
  const [random_num,setRandomNum] = useState(0)
  const [isGame, setIsGame] = useState(false)
  const [droppedFish, setDroppedFish] = useState<fish | null>(null);
  const [sum, setSum] = useState(0)
  
  const totalChance = fish.reduce((total, fish) => (total + fish.chance), 0);
  

  const randomFishChoise = () => {
    const random = Math.random() * totalChance;
    let cumulative = 0;
  
    for (let i = 0; i < fish.length; i++) {
      cumulative += fish[i].chance;
      if (random <= cumulative) {
        return fish[i];
      }
    }
    return null;
  };
  
  
  const shopButton = () => {
    setCurrState((prev : any) => prev = 1)
    console.log(currState);
  }
  const invButton = () => {
    setCurrState((prev : any) => prev = -1)
    console.log(currState);
  }
  const catchButton = () => {
    const result = randomFishChoise();
    setDroppedFish(result);
    setIsGame(true)
    console.log(result);

    
  }
  const closeBtn = () => {
    setCurrState((prev : any) => prev = 0)
    console.log(currState)

  }
  let content = null;
  if(currState === 0){
      content = null
  }
  else if (currState === -1) {
    content = (
      <div className="s-a-i" >
        <CloseBtn width="10%" height="5%" className="close-btn" onClick={closeBtn} />
        <Inventory invContent={inventoryContent} />
      </div>
    );
  } else if (currState === 1) {
    content = (
      <div className="s-a-i" >
          <CloseBtn width="10%" height="5%" className="close-btn" onClick={closeBtn} />

        BANANA
      </div>
    );
  }
  // let game = null
  // isGame ? game=<CatchFish invCont={inventoryContent} droppedFish={droppedFish}/> : game = null

  
  

  
  return (
    <section className="interface" style={{backgroundImage:`url(${gameImg})`}}>
      <div className="btns">
        <Button width='150px' height='150px' onClickE={shopButton}>Shop</Button>
        <Button width='150px' height='150px' onClickE={invButton}>Inventory</Button>
        <Button width='150px' height='150px' onClickE={catchButton}>Catch</Button>
      </div>
      {content}

      
      {isGame && <CatchFish invCont={inventoryContent} droppedFish={droppedFish} isGame={isGame}/>}
      
      


    </section>
  )
}

export default Interface