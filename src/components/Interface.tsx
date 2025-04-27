import { useEffect, useState } from "react"
import React from 'react'
import gameImg from "../assets/img/location.png"
import Button from './Button'
import CatchFish from './CatchFish'
import Inventory from "./Inventory"
import btnImage from "../assets/img/buttonbg.jpg"
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
import DroppedFish from "./DroppedFish"
import Shop from "./Shop"

export type fish = {
  name:string,
  imgSrc:string,
  quality:string,
  price:number,
  chance:number,
  fishSp:number,
  scaleFillspd:number

}
export type forShop = {
  name:string,
  price:number,
  boostPrice:number,
  fillSpd:number,


}
let fishCopy : fish[] = [
  {
    name:"Common fish1",
    imgSrc:CommonFish1,
    quality:"common",
    price:10,
    chance:0.4,
    fishSp:1.2,
    scaleFillspd:0.009
    

  },
  {
    name:"Common fish2",
    imgSrc:CommonFish2,
    quality:"common",
    price:10,
    chance:0.4,
    fishSp:1.2,
    
    scaleFillspd:0.009
    

  },
  {
    name:"Rare fish1",
    imgSrc:RareFish1,
    quality:"rare",
    price:25,
    chance:0.05,
    fishSp:0.7,
    scaleFillspd:0.007
    

  },
  {
    name:"Rare fish2",
    imgSrc:RareFish2,
    quality:"rare",
    price:25,
    chance:0.05,
    fishSp:0.7,
    scaleFillspd:0.007
    

  },
  {
    name:"Super rare fish1",
    imgSrc:SuperrareFish1,
    quality:"Super rare",
    price:50,
    chance:0.025,
    fishSp:0.5,
    scaleFillspd:0.004
    

  },
  {
    name:"Super rare fish2",
    imgSrc:SuperrareFish2,
    quality:"Super rare", 
    price:50,
    chance:0.025,
    fishSp:0.5,
    scaleFillspd:0.004
    

  },
  {
    name:"Epic fish1",
    imgSrc:EpicFish1,
    quality:"epic",
    price:200,
    chance:0.015,
    fishSp:0.3,
    scaleFillspd:0.003
    

  },
  {
    name:"Epic fish2",
    imgSrc:EpicFish2,
    quality:"epic",
    price:200,
    chance:0.020,
    fishSp:0.3,
    scaleFillspd:0.003
    

  },
  {
    name:"Legendary fish1",
    imgSrc:LegendaryFish1,
    quality:"legendary",
    price:500,
    chance:0.01,
    fishSp:0.2,
    scaleFillspd:0.002
    

  },
  {
    name:"Legendary fish2",
    imgSrc:LegendaryFish2,
    quality:"legendary",
    price:500,
    chance:0.01,
    fishSp:0.2,
    scaleFillspd:0.002
    

  },


]
let fish : fish[] = [
  {
    name:"Common fish1",
    imgSrc:CommonFish1,
    quality:"common",
    price:10,
    chance:0.4,
    fishSp:1.2,
    scaleFillspd:0.009
    

  },
  {
    name:"Common fish2",
    imgSrc:CommonFish2,
    quality:"common",
    price:10,
    chance:0.4,
    fishSp:1.2,
    
    scaleFillspd:0.009
    

  },
  {
    name:"Rare fish1",
    imgSrc:RareFish1,
    quality:"rare",
    price:25,
    chance:0.05,
    fishSp:0.7,
    scaleFillspd:0.007
    

  },
  {
    name:"Rare fish2",
    imgSrc:RareFish2,
    quality:"rare",
    price:25,
    chance:0.05,
    fishSp:0.7,
    scaleFillspd:0.007
    

  },
  {
    name:"Super rare fish1",
    imgSrc:SuperrareFish1,
    quality:"Super rare",
    price:50,
    chance:0.025,
    fishSp:0.5,
    scaleFillspd:0.004
    

  },
  {
    name:"Super rare fish2",
    imgSrc:SuperrareFish2,
    quality:"Super rare", 
    price:50,
    chance:0.025,
    fishSp:0.5,
    scaleFillspd:0.004
    

  },
  {
    name:"Epic fish1",
    imgSrc:EpicFish1,
    quality:"epic",
    price:200,
    chance:0.015,
    fishSp:0.3,
    scaleFillspd:0.003
    

  },
  {
    name:"Epic fish2",
    imgSrc:EpicFish2,
    quality:"epic",
    price:200,
    chance:0.020,
    fishSp:0.3,
    scaleFillspd:0.003
    

  },
  {
    name:"Legendary fish1",
    imgSrc:LegendaryFish1,
    quality:"legendary",
    price:500,
    chance:0.01,
    fishSp:0.2,
    scaleFillspd:0.002
    

  },
  {
    name:"Legendary fish2",
    imgSrc:LegendaryFish2,
    quality:"legendary",
    price:500,
    chance:0.01,
    fishSp:0.2,
    scaleFillspd:0.002
    

  },


]

let shopFilling : forShop[] = [
  {
    name:"Upgrade 1",
    price:1000,
    boostPrice:1.5,
    fillSpd:0.001

  },
  {
    name:"Upgrade 2",
    price:3000,
    boostPrice:2.2,
    fillSpd:0.001

  },
  {
    name:"Upgrade 3",
    price:7000,
    boostPrice:3,
    fillSpd:0.0015

  },
  {
    name:"Upgrade 4",
    price:12000,
    boostPrice:3.5,
    fillSpd:0.002

  },
  {
    name:"Upgrade 5",
    price:20000,
    boostPrice:5,
    fillSpd:0.003

  },
  
]





const Interface = () => {
  const [inventoryContent, setinventoryContent] = useState<fish[]>([])
  const [ShopContent, setShopContent] = useState<forShop[]>(shopFilling)
  
  const [currState, setCurrState] = useState(0)
  const [random_num,setRandomNum] = useState(0)
  const [balance, setBalance] = useState(0)
  const [currUpgrade, setCurrUpgrade] =  useState<forShop>({
    name:"null",
    price:0,
    boostPrice:1,
    fillSpd:0
  })
  
  const [droppedFish, setDroppedFish] = useState<fish>({
    name:"null",
    imgSrc:"null",
    quality:"null",
    price:0,
    chance:0,
    fishSp:0,
    scaleFillspd:0
  });
  const [sum, setSum] = useState(0)
  
  const totalChance = fish.reduce((total, fish) => (total + fish.chance), 0);
  const [isGame, setIsGame] = useState(false)
  const [isEndGame, setIsEndGame] = useState(false)
  const updateGameStatus = (data1:boolean) => {
    setIsGame(data1)
    

  }
  const updateInvStatusAdd = () =>{
    setinventoryContent((prev) => [...(prev || []), droppedFish ? droppedFish : {
      name:"test",
      imgSrc:gameImg,
      quality:"Legendary",
      price:99999,
      chance:10,
      fishSp:111,
      scaleFillspd:0.01
    }])
  }
  const updateInvStatusDel = (index:number) =>{
    setinventoryContent((prev) => prev ? prev.filter((_, i) => i !== index) : [])

  }
  const UpgradeFish = (newFish:fish[]) => {
    fish = newFish

  }

  const randomFishChoise = () => {
    const random = Math.random() * totalChance;
    let cumulative = 0;
  
    for (let i = 0; i < fish.length; i++) {
      cumulative += fish[i].chance;
      if (random <= cumulative) {
        return fish[i];
      }
    }
    return {
      name:"test",
      imgSrc:gameImg,
      quality:"Legendary",
      price:99999,
      chance:10,
      fishSp:111,
      scaleFillspd:0.01
    };
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
    setIsEndGame(false)
    setCurrState((prev : any) => prev = 0)
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
        <Inventory invContent={inventoryContent} invUpdate={updateInvStatusDel} setBalance={setBalance}/>
      </div>
    );
  } else if (currState === 1) {
    content = (
      <div className="s-a-i" >
          <CloseBtn width="10%" height="5%" className="close-btn" onClick={closeBtn} />
          <Shop fishes={fishCopy} shopContent={ShopContent}/>

       
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
        <div className="balance" style={{backgroundImage:`url(${btnImage})`}}> Balance {balance}
        </div>
      </div>
     
       
      {content}

      
      {isGame && <CatchFish invCont={inventoryContent} droppedFish={droppedFish} update={updateGameStatus} update2={updateInvStatusAdd} setEndGame={setIsEndGame}/>}
      {isEndGame && <DroppedFish droppedFish={droppedFish} setEndGame={setIsEndGame}/>  }

    </section>
  )
}

export default Interface