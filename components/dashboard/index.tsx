import React, { useCallback } from "react";
import {
    AcademicCapIcon,
    CameraIcon,
} from '@heroicons/react/outline';
import { DashboardItem } from "./DashboardItem";
import Image from "next/image";
import bg from "../../img/bg-login.jpeg";
import { Button } from "../button";
import { useRouter } from "next/router";

export const Dashboard = ({ children }: any) => {

    const router = useRouter();
    
    const logout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    }

    React.useEffect(() => {
        const isConnected = localStorage.getItem("token") !== null;
        if (!isConnected) {
            router.push("/login");
        }
    }), [];

    return (
        <div className="w-full h-screen flex flex-col">
            <Image src={bg} alt='bg-admin' layout="fill" className="blur-sm z-0" />
            <div className="top-0 flex justify-end items-center w-full h-14 z-10">
                <Button name='Logout' onClick={logout} custom='w-20 mr-3' />
            </div>
            <div className="w-full h-full px-24 py-12 z-10">
                <div className="w-full h-full bg-white shadow-xl rounded-md flex">
                    <div className="w-1/6 h-full bg-slate-100 rounded-l-md">
                        <div className="px-2 py-2">
                            <h1 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">Dashboard</h1>
                            <DashboardItem name='Quizz' icon={<AcademicCapIcon className="w-5 h-5" />} onClick='/admin/quizz' />
                            <DashboardItem name='Questions' icon={<AcademicCapIcon className="w-5 h-5" />} onClick='/admin/questions' />
                            <DashboardItem name='Pictures' icon={<CameraIcon className="w-5 h-5" />} onClick='' />
                        </div>
                    </div>
                    <div className="w-5/6 h-full bg-slate-200 rounded-r-md">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}