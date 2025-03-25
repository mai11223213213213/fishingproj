import React, { useState, useEffect } from 'react';
import { preconnect } from 'react-dom';

const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const CatchFish = () => {
    const [fishPos, setFishPos] = useState(generateRandomNumber(1, 500));
    const [isMouseDown, setIsMouseDown] = useState(true);
    let [floatPos, setFloatPos] = useState(fishPos)
    let [newFishPos, setNewFishPos] = useState(generateRandomNumber(1, 500))
    let [fishSpeed, setFishSpeed] = useState(generateRandomNumber(1, 2))
    
    useEffect(()=>{
        
        const interval = setInterval(() => {
            setFishPos( (prevPos : any) => {
                if(prevPos != 500 ){
                    if(prevPos !=0){
                        if(prevPos > newFishPos){
                            return prevPos - fishSpeed*3

                        }
                        else if(prevPos < newFishPos){
                            return prevPos + fishSpeed*3


                        }
                        else if(prevPos == newFishPos){
                            return prevPos -1 
                        }

                    }
                }


            });
        }, 100);
        setNewFishPos(generateRandomNumber(1,500))
        setFishSpeed(generateRandomNumber(1,4))
        
        return () => clearInterval(interval);


    }, [fishPos])

    useEffect(() => {
       
        const handleMouseDown = (event: MouseEvent) => {
            if (event.button === 0) { // Ліва кнопка миші
                setIsMouseDown(false);
            }
        };
        const handleMouseUp = (event: MouseEvent) => {
            if (event.button === 0) {
                setIsMouseDown(true);
            }
        };
                
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFloatPos(prevPos => isMouseDown ? prevPos + 3 : prevPos - 3);
        }, 10);
        
        return () => clearInterval(interval);
    }, [isMouseDown]);

    return (
        <div className="scale">
            <div 
                className="float" 
                style={{ position: "absolute", backgroundColor: "purple", width: "200px", height: "200px", left: "20px", top: floatPos }}
            ></div>
            <div 
                className="fish"
                style={{ position: "absolute", backgroundColor: "red", width: "100px", height: "100px", left: "20px", top: fishPos, zIndex:'1', margin:'0 auto'}}

            >

            </div>

        </div>
    );
};

export default CatchFish;
