import React from 'react'

const Chat = () => {
    return (
        <>
            <div className="w-full px-5 flex flex-col justify-between bg-transparent overflow-y-auto">
                <div className="flex flex-col mt-5">
                    <div className="flex justify-end mb-4">
                        <div
                            className="mr-2 py-3 px-4 bg-meone rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                        >
                            Welcome to group everyone !
                        </div>
                        <img
                            src="https://multisolutionscorner.in/wp-content/uploads/2020/06/Meren-Lemtur-480x300.jpg"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-start mb-4">
                        <img
                            src="https://multisolutionscorner.in/wp-content/uploads/2020/06/Rino-Swuro-480x300.jpg"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                        <div
                            className="ml-2 py-3 px-4 bg-mefour rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-black"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            at praesentium, aut ullam delectus odio error sit rem. Architecto
                            nulla doloribus laborum illo rem enim dolor odio saepe,
                            consequatur quas?
                        </div>
                    </div>
                    <div className="flex justify-end mb-4">
                        <div>
                            <div
                                className="mr-2 py-3 px-4 bg-meone rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Magnam, repudiandae.
                            </div>

                            <div
                                className="mt-4 mr-2 py-3 px-4 bg-meone rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Debitis, reiciendis!
                            </div>
                        </div>
                        <img
                            src="https://multisolutionscorner.in/wp-content/uploads/2020/06/Meren-Lemtur-480x300.jpg"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-start mb-4">
                        <img
                            src="https://multisolutionscorner.in/wp-content/uploads/2020/06/Rino-Swuro-480x300.jpg"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                        <div
                            className="ml-2 py-3 px-4 bg-mefour rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-black"
                        >
                            happy holiday guys!
                        </div>
                    </div>
                    <div className="flex justify-start mb-4">
                        <img
                            src="https://multisolutionscorner.in/wp-content/uploads/2020/06/Rino-Swuro-480x300.jpg"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                        <div
                            className="ml-2 py-3 px-4 bg-mefour rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-black"
                        >
                            happy holiday guys!
                        </div>
                    </div>
                    <div className="flex justify-start mb-4">
                        <img
                            src="https://multisolutionscorner.in/wp-content/uploads/2020/06/Rino-Swuro-480x300.jpg"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                        <div
                            className="ml-2 py-3 px-4 bg-mefour rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-black"
                        >
                            happy holiday guys!
                        </div>
                    </div>
                    <div className="flex justify-start mb-4">
                        <img
                            src="https://multisolutionscorner.in/wp-content/uploads/2020/06/Rino-Swuro-480x300.jpg"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                        <div
                            className="ml-2 py-3 px-4 bg-mefour rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-black"
                        >
                            happy holiday guys!
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <input
                        className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                        type="text"
                        placeholder="type your message here..."
                    />
                </div>
            </div>
        </>
    )
}

export default Chat