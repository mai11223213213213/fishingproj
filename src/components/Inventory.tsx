import React from 'react'
import Button from './Button'
import { fish } from './Interface'
import gameImg from "../assets/img/location.png"

interface inv{
    invContent:fish[]
}
const sold = () =>{
    console.log('kasjdlaikdhalwwidhoaija')
}
const Inventory = ({invContent}:inv) => {
  return (
    <div className="inv-box">
        
        
        {invContent.map((el) => (
       
        <div className="fish-box">
            <p className="fish-name">{el.name}</p>
            <img src={el.imgSrc} alt="" className="fish-img" />
            <p className="fish-quality">Quality:{el.quality}</p>
            <div className="info"> 
                <p className="fish-chance">Chance:{String(el.chance)}</p>
                <p className="fish-price">Price:{String(el.price)}</p>
            </div>
            <Button width='64%' height='20%' onClickE={sold}>SOLD</Button>


        </div>
    ))}</div>
  )
}

export default Inventory