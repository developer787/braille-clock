import { useEffect } from 'react';

const BrailleGrid = () => {
    //   const handleTouchStart = () => {
    //     // Vibrate for 100ms
    //     navigator.vibrate(100);
    //}

    const BrailleTouch = () => {

        return (
            <div className='w-[40px] h-[40px] bg-gray-500 rounded-full'>
                
            </div>
        )
    }

    return (
        <div className="bg-red-500" >
            <div className="grid grid-cols-2 grid-rows-3 gap-4 bg-yellow-500">
                <BrailleTouch />
                <BrailleTouch />
                <BrailleTouch />
                <BrailleTouch />
                <BrailleTouch />
                <BrailleTouch />

            </div>
        </div>
    )
};

export default BrailleGrid;
