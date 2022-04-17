import React from "react";

interface IInputProps {
    name: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({name, onChange, type}: IInputProps) => {
    const [value, setValue] = React.useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e);
    }
    return (
        <input type={type} name={name} placeholder={name} onChange={handleChange} value={value} className='p-3 bg-slate-200 m-2 text-white rounded-md hover:bg-slate-300 focus:outline-none focus:shadow-outline w-full' />
    )
}