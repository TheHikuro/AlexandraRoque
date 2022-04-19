import Image from "next/image";
import React from "react";
import { Button } from "../../components/button"
import { Dashboard } from "../../components/dashboard";
import useAuth from "../../hooks/useAuth";
import bg from "../../img/bg-login.jpeg";


const Admin = () => {
    const { logout } = useAuth();
    // not secured yet
    React.useEffect(() => {
        localStorage.getItem('isConnected') === 'true' ? 'true' : logout();
    })
    // if user is not connected with firebase, redirect to login page
    // if (!useAuth().isConnected) {}
    
    return (
        <div className="w-full h-screen flex flex-col">
            <Image src={bg} alt='bg-admin' layout="fill" className="blur-sm z-0"/>
            <div className="top-0 flex justify-end items-center w-full h-14 z-10">
                <Button name='Logout' onClick={logout} custom='w-20 mr-3' />
            </div>
            <div className="w-full h-full px-24 py-12 z-10">
                <Dashboard />
            </div>
        </div>
    )
}

export default Admin