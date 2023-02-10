import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Chat from './Chat'
import RightBar from './RightBar'

const Dashboard = () => {
    return (
        <div className="bg-mefour backimage">
            <div className="container mx-auto shadow-lg rounded-lg">
                <Navbar />
                <div className="flex flex-row justify-between">
                    <Sidebar />
                    <Chat />
                    <RightBar />
                </div>
            </div>
        </div>
    )
}

export default Dashboard