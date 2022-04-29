import React, { createContext, useContext, useCallback, useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const ModalContext = createContext({
    openModal: () => { },
    UpdateModalTitle: (title: string) => { title },
    UpdateModalContent: (content: JSX.Element) => { content },
    closeModal: () => { },
    closeModalWithoutPropagation: {}
});

export const ModalProvider = ({ children }: any) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(<></> as JSX.Element);

    const UpdateModalTitle = useCallback((newModalTitle: any) => {
        setModalTitle(newModalTitle);
    }, [])

    const UpdateModalContent = useCallback((newModalContent: JSX.Element) => {
        setModalContent(newModalContent.props.children);
    }, [])

    const openModal = useCallback(() => {
        setModalOpened(true);
    }, [])

    const closeModal = useCallback(() => {
        setModalOpened(false);
    }, [])

    const closeModalWithoutPropagation = useCallback((event: any) => {
        event.stopPropagation();
        setModalOpened(false);
    }, [])

    return (
        <ModalContext.Provider
            value={{
                openModal: openModal,
                closeModal: closeModal,
                closeModalWithoutPropagation: closeModalWithoutPropagation,
                UpdateModalTitle: UpdateModalTitle,
                UpdateModalContent: UpdateModalContent,
            }}
        >
            <div>
                {modalOpened && (
                    <>
                        <div className={`fixed inset-0 z-50 overflow-auto ${modalOpened ? 'opacity-100' : 'opacity-0'}`}>
                            <div className='absolute inset-0 bg-gray-900 opacity-50' onClick={closeModal}></div>
                            <div className={`absolute bg-white z-50 w-92 h-92 inset-1/4 rounded-md shadow-xl`}>
                                <div className='absolute inset-0 flex flex-col overflow-scroll'>
                                    <div className="px-6 mt-3 flex items-center justify-between">
                                        <span className="uppercase tracking-wide text-gray-700 font-bold text-xl">{modalTitle}</span>
                                        <XIcon className="cursor-pointer float-right h-7 w-7 -mr-3 font-bold hover:text-red-500" onClick={closeModal} />
                                    </div>
                                    <div className="p-6">
                                        {modalContent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext);