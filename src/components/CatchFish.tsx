import React, { useState } from 'react'
const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const CatchFish = () => {
    let [fishPos, setFishPos]  = useState(generateRandomNumber(1,500))
    let [floatPos, setFloatPos] = useState(fishPos)



    return (
        <div>CatchFish</div>
    )
}

export default CatchFish