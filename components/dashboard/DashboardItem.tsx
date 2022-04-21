export const DashboardItem = ({ name, onClick, icon }: any) => {
    return (
        <div className="py-1">
            <div onClick={onClick} className='w-full h-12 items-center flex justify-between rounded-md p-2 hover:cursor-pointer hover:bg-slate-300 bg-slate-200'>
                {icon && icon}
                {name}
            </div>
        </div>
    )
}