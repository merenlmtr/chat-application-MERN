import React from 'react'
import { format } from 'timeago.js'
import defaultAvatar from '../../assets/default-avatar.jpg'

const Chat = ({ own, message }) => {
    return (
        <>
            <div className={own ? "flex justify-end my-4 relative" : "flex justify-start my-4 relative"}>
                <div
                    className={own ? "mr-2 py-3 px-4 bg-meone text-white rounded-bl-3xl rounded-tl-3xl rounded-tr-xl" :
                        "ml-2 py-3 px-4 bg-mefour text-black rounded-br-3xl rounded-tr-3xl rounded-tl-xl"}
                >
                    {message.text}
                </div>
                <img
                    src={defaultAvatar}
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                />
                <div className={own ? "absolute -bottom-6 right-2 text-sm text-gray-500" : "absolute -bottom-6 left-2 text-sm text-gray-500"}>
                    {format(message.createdAt)}
                </div>
            </div>
        </>
    )
}

export default Chat