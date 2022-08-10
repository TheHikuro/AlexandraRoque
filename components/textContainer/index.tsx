interface Props {
    content: JSX.Element
}

export const TextContainer = ({ content }: Props) => {
    return (
        <div className="w-full h-96 rounded-xl bg-white shadow-xl p-10">
            <span className='text-justify text-lg'>
                {content}
            </span>
            {/* <button className='py-2 px-6 rounded-full bg-baseColor-100 font-lightbold text-white text-xl w-52'>Mon parcours</button> */}
        </div>
    )
}