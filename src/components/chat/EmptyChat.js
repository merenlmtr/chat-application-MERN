import React from 'react'

const EmptyChat = () => {
    return (
        <>
            <div className="w-full px-5 flex flex-col h-screen justify-between bg-transparent">
                <div className="flex flex-col mt-5 overflow-y-scroll flex-1">
                    <h1 className='font-bold text-6xl text-gray-300 cursor-default leading-snug'>
                        Why so Empty here.? <br /> Start Chat...
                    </h1>
                </div>
            </div>
        </>
    )
}

export default EmptyChat