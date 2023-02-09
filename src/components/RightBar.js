import React from 'react'

const RightBar = () => {
    return (
        <>
            <div className="w-2/5 border-l-2 px-5 bg-white">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl py-4">NagaTechies Group</div>
                    <img
                        src="https://scontent.fgau3-2.fna.fbcdn.net/v/t39.30808-6/308718535_466572258856033_3022280822345304619_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UMQfh987QUwAX_hUaic&_nc_ht=scontent.fgau3-2.fna&oh=00_AfDOMk99FSdz77y8uZ1ACdJwrRcX59iFKiTl-MV1ypuO-g&oe=63EA0C92"
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