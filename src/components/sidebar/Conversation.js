import axios from 'axios'
import React, { useEffect, useState } from 'react'
import defaultAvatar from '../../assets/default-avatar.jpg'

const Conversation = ({ conversation, currentUser }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id)

        const getUser = async () => {
            try {
                const res = await axios.get('user/users/' + friendId)
                setUser(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [conversation.members, currentUser._id])

    return (
        <>
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2 border-l-4 border-methree hover:bg-gray-200 cursor-pointer">
                <div className="w-1/4">
                    <img
                        src={defaultAvatar}
                        className="object-content h-12 w-12 rounded-full"
                        alt=""
                    />
                </div>
                <div className="w-full pl-1">
                    <div className="text-lg font-semibold">{user?.username}</div>
                    <span className="text-gray-500">Pick me at 9:00 Am</span>
                </div>
            </div>
        </>
    )
}

export default Conversation