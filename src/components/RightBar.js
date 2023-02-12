import React from 'react'

const RightBar = () => {
    return (
        <>
            <div className="w-2/5 border-l-2 px-5 bg-white">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl py-4">NagaTechies Group</div>
                    <img
                        src="https://dummyimage.com/400x400/4B064A/fff.png"
                        className="object-cover rounded-xl h-64"
                        alt=""
                    />
                    <div className="font-semibold py-4">Created 22 Sep 2021</div>
                    <div className="font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                        perspiciatis!
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightBar