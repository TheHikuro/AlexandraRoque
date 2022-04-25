import { initialState, IModalProps } from "./type";
import { ModalAction, ModalActionType } from "./action";
import produce from "immer";

export const modalStateReducer = (state = initialState, action: ModalAction) => produce(state, (draft: IModalProps) => {
	switch (action.type) {
		case ModalActionType.OPEN_MODAL:
			return {
				...initialState,
				open: true,
				...action.payload,
			};
		case ModalActionType.CLOSE_MODAL:
			return {
				...initialState,
			};
		default:
			return state;
	}
});