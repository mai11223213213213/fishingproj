import React, { useState, useEffect } from 'react';

const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const CatchFish = () => {
    const [fishPos, setFishPos] = useState(generateRandomNumber(1, 500));
    const [isMouseDown, setIsMouseDown] = useState(true);
    const [floatPos, setFloatPos] = useState(fishPos);
    const [newFishPos, setNewFishPos] = useState(generateRandomNumber(1, 500));
    const [finishScale, setFinishScale] = useState(0);
    const [trueFishPos, setTrueFishPos] = useState(0)
    

    useEffect(() => {
        const interval = setInterval(() => {
            setFishPos((prevPos) => { 
                const generateNewPos = () => { 
                    
                    let newPos = prevPos + (generateRandomNumber(130, 300) * (generateRandomNumber(0, 1) === 0 ? 1 : -1));
                  
                    if (newPos <= 500 && newPos >= 0) {
                        return newPos;
                    }
                    return prevPos; 
                };
                return generateNewPos();
            });
        }, 1000);

        setNewFishPos(generateRandomNumber(1, 500));

        return () => clearInterval(interval);
    }, [fishPos]);
    useEffect(() => {
        const updateFishPos = () => {
            const fish: any = document.querySelector(".fish");
            if (fish) {
                const rect = fish.getBoundingClientRect();
                setTrueFishPos(rect.top);  
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
        if (Math.abs(floatPos - trueFishPos) < 150 && finishScale < 100) { 
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
                ? (prevPos <= 500 ? prevPos + 3 : prevPos) 
                : (prevPos <= 0 ? prevPos : prevPos - 3)
            );
        }, 10);

        return () => clearInterval(interval);
    }, [isMouseDown]);

    return (
        <div className="fishing-box">
            <div className="fishing-pos">
                

                <div
                    className="float"
                    style={{top: floatPos}}
                    
                >
                    <p>{floatPos}</p>
                </div>
                <div
                    className="fish"
                    style={{ top: fishPos, zIndex: '1', transition:"0.3s ease" }}

                >
                    <p>{fishPos}</p>

                </div>

            </div>
            <div className="fishing-scale">
                <div className="pogress-bar" style={{backgroundColor:"yellow", height:`${finishScale}%`}}></div>
            </div>
        </div>
    );
};

export default CatchFish;
