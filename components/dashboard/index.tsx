import React from "react";
import { GridColDef } from '@mui/x-data-grid';
import {
    AcademicCapIcon,
    CheckIcon,
    XIcon,
    CameraIcon,
    PencilIcon,
    TrashIcon,
    DotsCircleHorizontalIcon
} from '@heroicons/react/outline';
import { Table } from "../table";
import { DashboardItem } from "./DashboardItem";
import { useDispatch } from "react-redux";
import { ModalActionType } from "../../redux/reducers/modal/action";

export const Dashboard = () => {
    // const [active, setActive] = React.useState(0);
    const dispatch = useDispatch()
    const columns: GridColDef[] = [
        /* { headerName: 'Id', field: 'id', width: 100, align: 'left' }, */
        { headerName: 'Name', field: 'name', width: 200, align: 'left' },
        { headerName: 'Answer', field: 'answer', width: 200, align: 'left' },
        { headerName: 'Display', field: 'display', width: 200, align: 'center', 
        renderCell: (row: any) => row.value === true ? <CheckIcon className="h-5 w-5 text-green-500" /> : <XIcon className="h-5 w-5 text-red-500" />, sortable: true },
        { headerName: 'Actions', field: 'actions', width: 200, align: 'right', renderCell: (row: any) => row.value === true ? <>
            <PencilIcon className="h-5 w-5 hover:text-blue-500 hover:cursor-pointer mr-2" onClick={ openModal }/>
            <TrashIcon className="h-5 w-5 hover:text-red-500 hover:cursor-pointer mr-2" />
            <DotsCircleHorizontalIcon className="h-5 w-5 hover:text-blue-500 hover:cursor-pointer" />
        </> : '' },
    ]
    const rows: any[] = [
        { id: 1, name: '🇬🇧', display: true, answer: 'United Kingdoms', actions: true },
        { id: 2, name: '🇺🇸', display: true, answer: 'United States', actions: true },
        { id: 3, name: '🇫🇷', display: true, answer: 'France', actions: true },
        { id: 4, name: '🇪🇸', display: true, answer: 'Spain', actions: true },
        { id: 5, name: '🇮🇹', display: true, answer: 'Italy', actions: true },
        { id: 6, name: '🇷🇺', display: false, answer: 'Russia', actions: true },
        { id: 7, name: '🇨🇳', display: true, answer: 'China', actions: true },
    ]
    const openModal = () => {
        dispatch({ 
            type: ModalActionType.OPEN_MODAL, 
            payload: { 
                title: 'Add new country', 
                body: 
                <>
                    <div>Bonjour</div>
                </>,
            }
        })
    }
    return (
        <div className="w-full h-full bg-white shadow-xl rounded-md flex">
            <div className="w-1/6 h-full bg-slate-100 rounded-l-md">
                <div className="px-2 py-2">
                    <h1 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">Dashboard</h1>
                    <DashboardItem name='Quizz' icon={<AcademicCapIcon className="w-5 h-5" />} onClick={() => { }} />
                    <DashboardItem name='Questions' icon={<AcademicCapIcon className="w-5 h-5" />} onClick={() => { }} />
                    <DashboardItem name='Pictures' icon={<CameraIcon className="w-5 h-5" />} onClick={() => { }} />
                </div>
            </div>
            <div className="w-5/6 h-full bg-slate-200 rounded-r-md">
                <Table 
                    data={rows} 
                    header={columns} 
                    pageSize={20} 
                    rowsPerPageOptions={[5, 10, 20]} 
                    checkbox={true}
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}