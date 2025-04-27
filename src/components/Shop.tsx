import React from 'react'
import Button from './Button'
import { fish } from './Interface'
import { forShop } from './Interface'
interface banana{
  fishes:fish[],
  shopContent:forShop[],

  
}
const Shop = ({fishes,shopContent}:banana) => {

  const Buy = ()=>{
    console.log('asasas')
  }
  return (
    <div className="shop-box">
      {shopContent.map((item) => (
        <div className="upgrade-box">
        <p className="upgrade-name">{item.name}</p>
        <p className="upgrade-boostPr">Price boost:X{item.boostPrice}</p>
        <p className="upgrade-fillSpd">Fill speed:+{(item.fillSpd)*100}%</p>
        <p className="upgrade-price">Price:{item.price}</p>
        <Button width='64%' height='20%' onClickE={Buy}>Buy</Button>
    </div>

      ))}
      
      
      </div>

    
    
  )
}

export default Shop