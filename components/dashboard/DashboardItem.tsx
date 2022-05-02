import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

export const DashboardItem = ({ name, onClick, icon }: any) => {
    // get router from nextjs
    const router = useRouter()
    return (
        <Link href={onClick} passHref>
            <div className="py-1">
                <div className={`w-full h-12 items-center flex justify-between rounded-md p-2 hover:cursor-pointer hover:bg-slate-300 bg-slate-200 active:${router.pathname === onClick ? 'bg-blue-300' : ''}`}>
                    {icon && icon}
                    {name}
                </div>
            </div>
        </Link>
    )
}
