'use client'

import { useState, useEffect } from 'react';

const BrailleGrid = () => {
    const [isTouching, setIsTouching] = useState(false);

    const handleTouchStart = () => {
        setIsTouching(true);
    }

    const handleTouchEnd = () => {
        setIsTouching(false);
    }

    useEffect(() => {
        if (isTouching) {
            // Vibrate for 100ms
            navigator.vibrate(100);
        }
    }, [isTouching]);

    const BrailleTouch = () => {
        return (
            <div
                className={`m-auto w-[16px] h-[16px] rounded-full bg-green-500 ${isTouching ? 'bg-opacity-50' : ''}`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            />
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
