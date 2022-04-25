export const ModalActionType = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
}

interface ModalOpenType {
    type: typeof ModalActionType.OPEN_MODAL
    payload?: {
        title: string
        open: boolean
        body: JSX.Element | null
        yesOrNoModal?: boolean
        yesAction?: () => void
        noAction?: () => void
    }
}

interface ModalCloseType {
    type: typeof ModalActionType.CLOSE_MODAL
    payload: undefined
}

export type ModalAction = ModalOpenType | ModalCloseType