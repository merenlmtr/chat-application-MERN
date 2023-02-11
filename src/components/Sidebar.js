import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto bg-white">
                {/* <!-- search compt --> */}
                <div className="border-b-2 py-4 px-2">
                    <input
                        type="text"
                        placeholder="search friend"
                        className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                    />
                </div>
                {/* <!-- end search compt --> */}

                {/* <!-- user list --> */}
                <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2 border-l-4 border-methree">
                    <div className="w-1/4">
                        <img
                            src="https://multisolutionscorner.in/wp-content/uploads/2020/06/Meren-Lemtur-480x300.jpg"
                            className="object-cover h-12 w-12 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="w-full pl-1">
                        <div className="text-lg font-semibold">Meren Lemtur</div>
                        <span className="text-gray-500">Pick me at 9:00 Am</span>
                    </div>
                </div>
                <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
                    <div className="w-1/4">
                        <img
                            src="https://multisolutionscorner.in/wp-content/uploads/2020/06/Rino-Swuro-480x300.jpg"
                            className="object-cover h-12 w-12 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="w-full pl-1">
                        <div className="text-lg font-semibold">Lara Croft</div>
                        <span className="text-gray-500">Will be there...</span>
                    </div>
                </div>
                {/* <!-- end user list --> */}
            </div>
        </>
    )
}

export default Sidebar