import { useRouter } from "next/router"
import React from "react"
import { whenPatternMatches } from "../../lib/helpers"
import { Navbar } from "../navbar"

export default function Container(props: any) {
    const router = useRouter()
    const [displayNav, setDisplayNav] = React.useState(true)

    React.useEffect(() => {
        whenPatternMatches(router.pathname, [
            [/^\/admin\/.*$/, () => setDisplayNav(false)],
            [/^\/login\/?$/, () => setDisplayNav(false)],
            [/^\/register\/?$/, () => setDisplayNav(false)],
        ])
    }, [router.pathname])

    return (
        <>
            <div className="flex flex-col w-full h-screen">
                {displayNav ? (
                    <div className="flex w-full h-20 items-center justify-center">
                        <Navbar />
                    </div>
                ) : null}
                <div className="w-full h-full flex overflow-scroll">
                    {props.children}
                </div>
            </div>
        </>
    )
}
