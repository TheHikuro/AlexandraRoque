import React from "react"

export const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="flex relative overflow-scroll h-screen w-full">
            <div className="w-full h-screen">
                {children}
            </div>
        </div>
    )
}
