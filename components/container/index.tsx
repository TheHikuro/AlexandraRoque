import { useRouter } from "next/router"
import { Navbar } from "../navbar"

export default function Container(props: any) {
    const isConnected = localStorage.getItem("isConnected")
    const router = useRouter()
    
    return(
        <>
            <div className="flex w-full h-full items-center justify-center">
                {isConnected === "false" ? (
                     router.pathname === "/login" ? ''
                     : (<Navbar />)
                ) : ''}
            </div>
            {props.children}
        </>
    )
}