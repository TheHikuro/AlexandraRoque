import { useRouter } from "next/router"
import React from "react"
import { Navbar } from "../navbar"

export default function Container(props: any) {
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
    }, [router.pathname])

    return (
        <>
            <div className="flex flex-col w-full h-full">
                <div className="flex w-full items-center justify-center">
                    {displayNav ? (<Navbar />) : ''}
                </div>
                <div className="mt-20 w-full h-full flex">
                    {props.children}
                </div>
            </div>
        </>
    )
}
