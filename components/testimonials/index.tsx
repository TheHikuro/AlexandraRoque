import { StarIcon } from "@heroicons/react/outline"
import { StarIcon as SolidStar } from "@heroicons/react/solid"
import React from "react";

export interface TestimonialsProps {
    name: string;
    company: string;
    comment: string;
}

export const Testimonials = ({ name, company, comment }: TestimonialsProps) => {
    return (
        <>
            <blockquote className="p-8 flex flex-col shadow-md hover:shadow-lg bg-gray-100 w-[500px] h-56 rounded-lg mx-5">
                <div className="flex items-center justify-start w-full">
                    <div className="w-full flex justify-between items-center">
                        <p className="mt-1 text-lg font-medium text-gray-700">{name}</p>
                        <p className="text-sm italic text-baseColor-100">{company}</p>
                    </div>
                </div>
                <div className="flex justify-start items-center w-full">
                    <SolidStar className="h-6 w-6 text-green-500" />
                    <SolidStar className="h-6 w-6 text-green-500" />
                    <SolidStar className="h-6 w-6 text-green-500" />
                    <StarIcon className="h-5 w-5 text-green-500" />
                    <StarIcon className="h-5 w-5 text-green-500" />
                </div>
                <p className="mt-4 text-gray-500 w-full">
                    {comment}
                </p>
            </blockquote>
        </>
    )
}

interface CarrouselProps {
    data: TestimonialsProps[];
}

export const Carrousel = ({ data }: CarrouselProps) => {
    const [index, setIndex] = React.useState(0)
    const handleNext = () => {
        if (index < data.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1)
        } else {
            setIndex(data.length - 1)
        }
    }
    const automatedInterval = React.useRef<NodeJS.Timeout>()
    React.useEffect(() => {
        automatedInterval.current = setInterval(() => {
            handleNext()
        }, 5000)
        return () => {
            clearInterval(automatedInterval.current!)
        }
    }, [index])
    return (
        <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="flex justify-between w-full">
                <BtnPrevNext fc={handlePrevious} arrow='M15 19l-7-7 7-7' />
                <div className=" w-full h-full flex justify-center items-center">
                    <Testimonials
                        name={data[index].name}
                        company={data[index].company}
                        comment={data[index].comment}
                    />
                </div>
                <BtnPrevNext fc={handleNext} arrow='M9 5l7 7-7 7' />
            </div>
            <div className="w-full h-10 flex justify-center items-center mt-2">
                {data.map((_, i) => (
                    <div key={i} className={`w-4 h-4 rounded-full mx-1 ${i === index ? "bg-baseColor-100" : "bg-gray-300"}`}></div>
                ))}
            </div>
        </div>
    )
}

export const BtnPrevNext = ({ fc, arrow }: { fc: () => void, arrow: string }) => {
    return (
        <div className="w-1/2 h-full flex justify-center items-center">
            <button onClick={fc} className="w-16 h-16 bg-baseColor-100 hover:bg-baseColor-200 rounded-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={arrow} />
                </svg>
            </button>
        </div>
    )
}