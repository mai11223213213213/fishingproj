import React from 'react'
import { fish } from './Interface'
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
import gameImg from "../assets/img/location.png"
import Button from './Button';
interface pum{
    droppedFish:fish | null,
    setEndGame:React.Dispatch<React.SetStateAction<boolean>>
}


const DroppedFish = ({droppedFish, setEndGame}:pum ) => {
    const Okbtn = ()=>{
        setEndGame(false)

}





  return (
    <div className='dropped-box'>
        <p className="dropped-name">You got: {droppedFish?.name}</p>
        <div className="box-separation">
            <img src={droppedFish?.imgSrc} alt="bugggg" className="dropped-img" />
            <p className="dropped-description">Price:{droppedFish?.price}</p>
            
        </div>
        <Button width='20%' height='13%' onClickE={Okbtn}>ok</Button>
    </div>
  )
}

export default DroppedFish