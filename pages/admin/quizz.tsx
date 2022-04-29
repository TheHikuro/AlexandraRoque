import { CheckIcon, XIcon, PencilIcon, TrashIcon, DotsCircleHorizontalIcon } from "@heroicons/react/outline";
import { GridColDef } from "@mui/x-data-grid";
import { Dashboard } from "../../components/dashboard";
import { useModalContext } from "../../components/modal";
import { Table } from "../../components/table";

const QuizzContainer = () => {
    const { openModal, UpdateModalTitle, UpdateModalContent } = useModalContext();

    const handleEditModalOpen = (data: any) => {
        console.log(data.row.name);
        UpdateModalTitle("Edit " + data.row.id);
        UpdateModalContent(
            <div className="flex bg-slate-500 w-full h-full flex-col">
                <div>{data.row.name}</div>
                <div>{data.row.answer}</div>
            </div>
        );
        openModal();
    }

    const columns: GridColDef[] = [
        /* { headerName: 'Id', field: 'id', width: 100, align: 'left' }, */
        { headerName: 'Name', field: 'name', width: 200, align: 'left' },
        { headerName: 'Answer', field: 'answer', width: 200, align: 'left' },
        {
            headerName: 'Display', field: 'display', width: 200, align: 'center',
            renderCell: (row: any) => row.value === true ? <CheckIcon className="h-5 w-5 text-green-500" /> : <XIcon className="h-5 w-5 text-red-500" />, sortable: true
        },
        {
            headerName: 'Actions', field: 'actions', width: 200, align: 'right', renderCell: (row: any) => row.value === true ?
                <>
                    <PencilIcon className="h-5 w-5 hover:text-blue-500 hover:cursor-pointer mr-2" onClick={() => handleEditModalOpen(row)} />
                    <TrashIcon className="h-5 w-5 hover:text-red-500 hover:cursor-pointer mr-2" />
                    <DotsCircleHorizontalIcon className="h-5 w-5 hover:text-blue-500 hover:cursor-pointer" />
                </> : ''
        },
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
    return (
        <Dashboard>
            <Table
                data={rows}
                header={columns}
                pageSize={20}
                rowsPerPageOptions={[5, 10, 20]}
                checkbox={true}
                disableSelectionOnClick
            />
        </Dashboard>
    )
}

export default QuizzContainer