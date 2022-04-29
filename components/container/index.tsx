import { useRouter } from "next/router"
import React from "react"
import { Navbar } from "../navbar"

export default function Container(props: any) {
    const isConnected = localStorage.getItem("isConnected")
    const router = useRouter()
    const [displayNav, setDisplayNav] = React.useState(true)

    React.useEffect(() => {
        isConnected === "true" ? setDisplayNav(true) : setDisplayNav(false)
        switch (router.pathname) {
            case "/login":
                setDisplayNav(false)
            case "/admin/quizz":
                setDisplayNav(true)
            case "/admin/questions":
                setDisplayNav(true)
            case "/admin/pictures":
                setDisplayNav(true)
            default:
                setDisplayNav(false)
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
