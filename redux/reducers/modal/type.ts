export interface IModalProps {
    title: string
    open: boolean
    body: JSX.Element | null
    yesOrNoModal?: boolean
    yesAction?: () => void
    noAction?: () => void
}

export const initialState: IModalProps = {
    title: '',
    open: false,
    body: null,
    yesOrNoModal: false,
    yesAction: () => { },
    noAction: () => { }
}