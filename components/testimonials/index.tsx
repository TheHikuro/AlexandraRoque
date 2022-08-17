import { StarIcon } from "@heroicons/react/outline"
import { StarIcon as SolidStar } from "@heroicons/react/solid"


export const Testimonials = ({ data }: any) => {
    return (
        <>
            <section className="">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide flex">
                            {data.map((testimonial: { name: string, comment: string, company: string }, index: number) => (
                                <blockquote className="p-8 bg-gray-100 rounded-lg mr-10" key={index}>
                                    <div className="flex items-center justify-start flex-col">
                                        <div className="w-full flex justify-between items-center">
                                            <p className="mt-1 text-lg font-medium text-gray-700">{testimonial.name}</p>
                                            <p className="text-sm italic text-gray-700">{testimonial.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-center">
                                        <SolidStar className="h-6 w-6 text-green-500" />
                                        <SolidStar className="h-6 w-6 text-green-500" />
                                        <SolidStar className="h-6 w-6 text-green-500" />
                                        <StarIcon className="h-5 w-5 text-green-500" />
                                        <StarIcon className="h-5 w-5 text-green-500" />
                                    </div>
                                    <p className="mt-4 text-gray-500">
                                        {testimonial.comment}
                                    </p>
                                </blockquote>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}