import React, { ReactNode } from 'react'
import btnImage from "../assets/img/buttonbg.jpg"
interface forbtn{
    width?:string;
    height?:string;
    onClickE:object;
    children:ReactNode;
    style?:object;


}
const Button = ({width,height,onClickE,children,style}:forbtn) => {
  return (
    <button style={{
        background:`url(${btnImage})`,
        backgroundSize:"100% 100%",
        width:width,
        height:height,
        backgroundRepeat:"no-repeat",
        border:"none",
        color:'#B7213F',
        fontFamily:"Papyrus, fantasy",
        

        
        
        ...style}} className='btn' ><p className='btn-txt'>{children}</p></button>
  )
}

export default Button