import { Fragment } from "react"

interface Props {
    content: JSX.Element
    title: string
    large?: boolean
}

export const TextContainer = ({ content, title, large }: Props) => {
    return (
        <Fragment>
            <div className="w-32 h-10 -mb-5 ml-5 rounded-full bg-blue-700 relative flex items-center justify-center text-lg font-bold text-white select-none shadow-lg">
                {title}
            </div>
            <div className={`w-full ${large ? 'h-96' : 'h-52'} rounded-xl bg-white shadow-xl p-10`}>
                <span className='text-justify text-lg'>
                    {content}
                </span>
            </div>
        </Fragment>
    )
}