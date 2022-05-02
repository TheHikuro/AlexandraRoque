import React from "react";

interface IButtonProps {
    name: string;
    onClick?: () => void;
    custom?: string;
}

export const Button = ({name, onClick, custom}: IButtonProps) => {
    return (
        <button onClick={onClick} className={`p-2 ${custom || 'w-52'} bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline`} >{name}</button>
    )
}