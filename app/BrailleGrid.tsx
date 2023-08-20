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

    const BrailleBlock = () => {
        return (
            <div className="m-2 p-2 grid grid-cols-2 grid-rows-3 gap-4 bg-yellow-500">
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
        <div className="p-4 bg-red-500" >
            <BrailleBlock />
            <BrailleBlock />
            <BrailleBlock />
            <BrailleBlock />
        </div>
    )
};

export default BrailleGrid;
