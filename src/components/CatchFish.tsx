import React, { useState, useEffect } from 'react';
import fishingField from "../assets/img/fishing-textures/fishing-field.jpg"
import greenThing from "../assets/img/fishing-textures/greenThing.jpg"
import fishThatMoves from "../assets/img/fishing-textures/fish-that-moving.jpg"
import ForFishingField from "../assets/img/fishing-textures/for-fishing-field.jpg"

const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
interface banana{
    invCont:object,
    droppedFish:object | null,
    isGame:boolean
}
const CatchFish = ({invCont, droppedFish, isGame}:banana) => {
    const [fishPos, setFishPos] = useState(generateRandomNumber(1, 230));
    const [isMouseDown, setIsMouseDown] = useState(true);
    const [floatPos, setFloatPos] = useState(fishPos);
    const [newFishPos, setNewFishPos] = useState(generateRandomNumber(1, 230));
    const [finishScale, setFinishScale] = useState(0);
    const [trueFishPos, setTrueFishPos] = useState(0)
    

    useEffect(() => {
        const interval = setInterval(() => {
            setFishPos((prevPos) => { 
                const generateNewPos = () => { 
                    
                    let newPos = prevPos + (generateRandomNumber(20, 120) * (generateRandomNumber(0, 1) === 0 ? 1 : -1));
                  
                    if (newPos <= 230 && newPos >= 0) {
                        return newPos;
                    }
                    return prevPos; 
                };
                return generateNewPos();
            });
        }, 1000);

        setNewFishPos(generateRandomNumber(1, 230));

        return () => clearInterval(interval);
    }, [fishPos]);
    useEffect(() => {
        const updateFishPos = () => {
            const fish: any = document.querySelector(".fish");
            if (fish) {
                const rect = fish.getBoundingClientRect();
                setTrueFishPos(rect.top - 170);  
            }
        };

        
        const fishPosInterval = setInterval(updateFishPos, 100);

        return () => clearInterval(fishPosInterval);
    }, [fishPos]);


    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (event.button === 0) {
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
        if (Math.abs(floatPos - trueFishPos) < 45 && finishScale < 100) { 
            setFinishScale((prev) => prev + 0.01)
        }
        else if(finishScale > 0  ){
            setFinishScale((prev) => prev - 0.01)

        }
    }, [floatPos, trueFishPos, finishScale]);

    useEffect(() => { 
        const interval = setInterval(() => {
            setFloatPos(prevPos => 
                isMouseDown 
                ? (prevPos <= 230 ? prevPos + 3 : prevPos) 
                : (prevPos <= 0 ? prevPos : prevPos - 3)
            );
        }, 10);

        return () => clearInterval(interval);
    }, [isMouseDown]);
    const winEvent = () => {
            isGame=false
    }
    const loseEvent = () => {

    }
    useEffect(()=>{

        if(finishScale >= 100){
            winEvent()
        }
        else if(finishScale <= 0){
            loseEvent()
        }
        else{
            return 
        }

    },[finishScale])
    return (
        
            <div className="fishing-box" style={{backgroundImage:`url(${fishingField})`}}>
                <div className="fishing-pos">
                    

                    <div
                        className="float"
                        style={{top: floatPos, backgroundImage:`url(${greenThing})`}}
                       
                        
                    >
                         
                    </div>
                    <div
                        className="fish"
                        style={{ top: fishPos, zIndex: '1', transition:"0.3s ease", backgroundImage:`url(${fishThatMoves})` }}

                    >
                    
                        
                    </div>

                </div>
                <div className="fishing-scale">
                    <div className="pogress-bar" style={{backgroundColor:"yellow", height:`${finishScale}%`}}></div>
                </div>
            </div>
      
    );
};

export default CatchFish;
