interface IButtonProps {
    name: string;
    onClick?: () => void;
}

export const Button = ({name, onClick}: IButtonProps) => {
    return (
        <button onClick={onClick} className='p-2 w-52 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline' >{name}</button>
    )
}