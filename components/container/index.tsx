import { useRouter } from "next/router"
import React from "react"
import { Navbar } from "../navbar"

export default function Container(props: any) {
    const isConnected = localStorage.getItem("isConnected")
    const router = useRouter()
    const [displayNav, setDisplayNav] = React.useState(true)

    React.useEffect(() => {
        switch (router.pathname) {
            case "/login":
                setDisplayNav(false)
                break;
            case "/admin/quizz":
                setDisplayNav(false)
                break
            case "/admin/questions":
                setDisplayNav(false)
                break
            case "/admin/pictures":
                setDisplayNav(false)
                break
            default:
                setDisplayNav(true)
                break
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
