import Image from "next/image";
import React from "react";
import { DataGrid, GridColDef, renderActionsCell } from '@mui/x-data-grid';
import {AcademicCapIcon, CheckIcon, XIcon} from '@heroicons/react/outline';
import { Table } from "../table";
import { DashboardItem } from "./DashboardItem";

export const Dashboard = () => {
    // const [active, setActive] = React.useState(0);
    const columns: GridColDef[] = [
        { headerName: 'Id', field: 'id', width: 100, align: 'left' },
        { headerName: 'Name', field: 'name', width: 200, align: 'left' },
        { headerName: 'Answer', field: 'answer', width: 200, align: 'left' },
        { headerName: 'Display', field: 'display', width: 150, align: 'center', 
        renderCell: (row: any) => row.value === true ? <CheckIcon className="h-5 w-5 text-green-500" /> : <XIcon className="h-5 w-5 text-red-500" />, sortable: true },
        { headerName: 'Actions', field: 'actions', width: 200, align: 'right' },
    ]
    const rows: any[] = [
        { id: 1, name: '🇬🇧', display: true, answer: 'United Kingdoms', actions: 'edit' },
        { id: 2, name: '🇺🇸', display: true, answer: 'United States', actions: 'edit' },
        { id: 3, name: '🇫🇷', display: true, answer: 'France', actions: 'edit' },
        { id: 4, name: '🇪🇸', display: true, answer: 'Spain', actions: 'edit' },
        { id: 5, name: '🇮🇹', display: true, answer: 'Italy', actions: 'edit' },
        { id: 6, name: '🇷🇺', display: false, answer: 'Russia', actions: 'edit' },
        { id: 7, name: '🇨🇳', display: true, answer: 'China', actions: 'edit' },
    ]
    return (
        <div className="w-full h-full bg-white shadow-xl rounded-md flex">
            <div className="w-1/6 h-full bg-slate-100 rounded-l-md">
                <div className="px-2 py-2">
                    <h1 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">Dashboard</h1>
                    <DashboardItem name='Quizz' icon={<AcademicCapIcon className="w-5 h-5" />} onClick={() => { }} />
                    <DashboardItem name='Photos' onClick={() => { }} />
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