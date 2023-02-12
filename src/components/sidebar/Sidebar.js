import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Chat from '../chat/Chat'
import EmptyChat from '../chat/EmptyChat'
import Conversation from './Conversation'

const Sidebar = () => {

    const [conversation, setConversation] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newmessage, setNewmessage] = useState("")
    const scrollRef = useRef()

    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        const getConversation = async () => {
            try {
                const res = await axios.get('/conversation/' + user._id)
                setConversation(res.data)
            } catch (error) {

            }
        }
        getConversation();
    }, [user._id])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get('/message/' + currentChat?._id)
                setMessages(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMessages();
    }, [currentChat]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })

    }, [messages])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newmessage,
            conversationId: currentChat._id
        }

        try {
            const res = await axios.post("/message", message)
            setMessages([...messages, res.data])
            setNewmessage("");
        } catch (error) {

        }
    }
    return (
        <>
            <div className="flex flex-col w-2/5 border-r-2 bg-white">
                <div className='flex flex-col'>
                    {conversation.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Conversation key={c._id} conversation={c} currentUser={user} />
                        </div>
                    ))}
                </div>
            </div>
            {currentChat ? (
                <>
                    <div className="w-full px-5 flex flex-col justify-between bg-transparent h-screen">
                        <div className="flex flex-col mt-5 overflow-y-scroll">
                            {messages.map((m) => (
                                <div ref={scrollRef}>
                                    <Chat message={m} own={m.sender === user._id} />
                                </div>
                            ))}
                        </div>
                        <div className="py-2 flex items-center bg-gray-300 px-3 rounded-xl mt-3">
                            <textarea
                                className="w-full p-2 bg-gray-200 rounded-xl"
                                type="text"
                                value={newmessage}
                                onChange={(e) => setNewmessage(e.target.value)}
                                placeholder="type your message here..."
                            />
                            <div onClick={handleSubmit}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </>
            ) : (<EmptyChat />)
            }


        </>
    )
}

export default Sidebar