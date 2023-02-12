import React from 'react'
import Navbar from './Navbar'
import Sidebar from './sidebar/Sidebar'
import RightBar from './RightBar'

const Dashboard = () => {
    return (
        <div className="bg-mefour backimage">
            <div className="container mx-auto shadow-lg rounded-lg h-screen">
                <Navbar />
                <div className="flex flex-row justify-between">
                    <Sidebar />
                    <RightBar />
                </div>
            </div>
        </div>
    )
}

export default Dashboard