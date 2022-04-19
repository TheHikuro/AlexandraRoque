import Image from "next/image";

const DashboardItem = ({name, onClick, icon}: any) => {
    return (
        <div className="py-1">
            <div onClick={onClick} className='w-full h-12 items-center flex justify-between rounded-md p-2 hover:cursor-pointer hover:bg-slate-300 bg-slate-200'>
                {icon && <Image src={icon} alt='icon' className="w-12 h-12 mr-4" />}
                {name}
            </div>
        </div>
    )
}

export const Dashboard= () => {
    return (
        <div className="w-full h-full bg-white shadow-xl rounded-md flex">
            <div className="w-1/6 h-full bg-slate-100 rounded-l-md">
                <div className="px-2 py-2">
                    <h1 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">Dashboard</h1>
                    <DashboardItem name='Quizz' onClick={() => {}} />
                    <DashboardItem name='Photos' onClick={() => {}} />
                </div>
            </div>
            <div className="w-5/6 h-full bg-slate-200 rounded-r-md">

            </div>
        </div>
    )
}