import React from 'react'
import Button from './Button'
import { fish } from './Interface'
import { forShop } from './Interface'
interface banana{
  fishStart:fish[],
  fishChange:fish[],
  shopContent:forShop[],
  setBalance:React.Dispatch<React.SetStateAction<number>>,
  balance:number,
  UpgradeFish:(newFish:fish[], index:number) => void,
  setCurrUpdrade:React.Dispatch<React.SetStateAction<forShop>>,


  
}
const Shop = ({fishStart, fishChange,shopContent, setBalance, balance, UpgradeFish, setCurrUpdrade}:banana) => {

  const Buy = (event: React.MouseEvent<HTMLButtonElement>) =>{
    const btns = document.querySelectorAll(".btn-buy")
    const btn = event.currentTarget
    
    console.log(btns)
    fishChange = fishStart
    
    for(let i=0; i < btns.length; i++){
        if(btns[i] == btn){
            
            let shopPrice = shopContent[i].price
            if(balance >= shopPrice){
              setBalance((prev) => prev - shopPrice)
              fishChange.map((element) => {
                element.price *= shopContent[i].boostPrice
              })
              UpgradeFish(fishChange, i)
              setCurrUpdrade(shopContent[i])
              
              
              

            }
            
            
            
            
           

        }

    }


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