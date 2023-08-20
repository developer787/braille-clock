'use client'

import { useEffect } from 'react';

const BrailleGrid = () => {
    //   const handleTouchStart = () => {
    //     // Vibrate for 100ms
    //     navigator.vibrate(100);
    //}

    const handleTouchStart = (

    ) => {
        // Vibrate for 100ms
        navigator.vibrate(100);
    }

    const BrailleTouch = () => {

        return (
            <div className="m-2 p-2 bg-blue-500">
            <div className={'m-auto w-[14px] h-[14px] rounded-full bg-green-500'}
            onTouchMove={handleTouchStart}
            >
                
            </div>
            </div>
        )
    }

    const BrailleBlock = () => {
        return (
            <div className="m-2 p-2 grid grid-cols-2 place-items-center bg-yellow-500">
                <BrailleTouch />
                <BrailleTouch />
                <BrailleTouch />
                <BrailleTouch />
                <BrailleTouch />
                <BrailleTouch />
            </div>
        )
    }


    return (
        <div className="flex p-4 bg-red-500 w-full" >
            <BrailleBlock />
            <BrailleBlock />
            <BrailleBlock />
            <BrailleBlock />
        </div>
    )
};

export default BrailleGrid;
