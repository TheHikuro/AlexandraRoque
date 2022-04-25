import { IModalProps } from "../../redux/reducers/modal/type";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ModalActionType } from "../../redux/reducers/modal/action";
import { RootState } from "../../redux/store";

export const Modal = () => {
    const dispatch = useDispatch()
    const {
        title,
        body,
        open,
        yesOrNoModal,
        yesAction,
        noAction,
    } = useSelector((state: RootState) => state.modal)

    const handleClose = () => {
        dispatch({
            type: ModalActionType.CLOSE_MODAL
        })
    }
    // make modal with tailwind and heroicon
    return (
        <div className={`fixed inset-0 z-50 ${open ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="bg-white rounded-md shadow-xl p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-4">
                        {body}
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button onClick={yesAction} className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
