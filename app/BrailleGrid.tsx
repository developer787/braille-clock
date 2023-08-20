'use client'

import { useEffect } from 'react';

const BrailleGrid = () => {
    // use document.elementFromPoint(x, y); to get the element at a given point
    // we can use this to get the element that is being touched like the BrailleTouch component
    // and check if active the vibrate


    const handleTouchStart = (

    ) => {
        // Vibrate for 100ms
        navigator.vibrate(100);
    }

    const BrailleTouch = () => {

        return (
            <div className="p-2 bg-blue-500">
                <div className={'m-auto w-[16px] h-[16px] rounded-full bg-green-500'}
                >

                </div>
            </div>
        )
    }

    const BrailleBlock = () => {
        return (
            <div className="m-1 p-2 grid grid-cols-2 place-items-center bg-yellow-500 w-full">
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
