import { useRouter } from "next/router"
import React from "react"
import { Navbar } from "../navbar"

export default function Container(props: any) {
    const isConnected = localStorage.getItem("isConnected")
    const router = useRouter()
    const [displayNav, setDisplayNav] = React.useState(true)

    React.useEffect(() => {
        if (isConnected === "false") {
            setDisplayNav(false)
        } else if (router.pathname === '/login') {
            setDisplayNav(false)
        } else if (router.pathname === '/admin') {
            setDisplayNav(false)
        } else {
            setDisplayNav(true)
        }
    }, [isConnected, router.pathname])
    
    return(
        <>
            <div className="flex w-full h-full items-center justify-center">
                {displayNav ? (<Navbar />) : ''}
            </div>
            {props.children}
        </>
    )
}