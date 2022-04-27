import Link from "next/link"

export const DashboardItem = ({ name, onClick, icon }: any) => {
    return (
        <Link href={onClick} passHref>
            <div className="py-1">
            <div className='w-full h-12 items-center flex justify-between rounded-md p-2 hover:cursor-pointer hover:bg-slate-300 bg-slate-200'>
                {icon && icon}
                {name}
            </div>
        </div>
        </Link>
    )
}