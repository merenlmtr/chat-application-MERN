import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import DropMenu from './DropMenu';

const Navbar = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.auth)
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
            <div className='flex justify-center items-center'>
                <span className='px-2 font-bold text-meone'>{user && user.username}</span>
                {/* <div
                    className="h-12 w-12 p-2 bg-meone rounded-full text-white font-semibold flex items-center justify-center"
                >
                    ML
                </div> */}
                <DropMenu />
            </div>

        </div>
    )
}

export default Navbar