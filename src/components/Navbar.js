import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Link, useNavigate } from 'react-router-dom'

import { logout } from '../actions/userActions'

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully!')
        navigate('/login')
    }

    return (
        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
            <div className="font-semibold text-2xl text-metwo">LehChat</div>
            <div className="w-1/2">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="search message"
                    className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
                />
            </div>
            <div className='flex justify-center items-center relative'>
                <span className='px-2 font-bold text-meone'>{(user.username).charAt(0).toUpperCase() + (user.username).slice(1)}</span>
                <div onClick={() => setMenu(!menu)}
                    className="h-12 w-12 p-2 bg-meone rounded-full text-white font-semibold flex items-center justify-center cursor-pointer"
                >
                    ML
                </div>
                {menu ? (
                    <div className='bg-metwo text-white absolute top-10 right-1 mt-2 shadow-lg shadow-slate-900'>
                        <ul>
                            <Link><li className='py-2 px-4 hover:bg-slate-100 hover:text-black'>Profile</li></Link>
                            <Link onClick={logoutHandler}><li className='py-2 px-4 hover:bg-slate-100 hover:text-black'>Logout</li></Link>
                        </ul>
                    </div>
                ) : (null)}

            </div>

        </div>
    )
}

export default Navbar