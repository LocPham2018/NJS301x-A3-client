import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
	if (action.type === 'INPUT_CHANGE') {
		const nextState = { ...state };
		nextState[action.id] = action.value;
		return nextState;
	}
	if (action.type === 'RESET') {
		const nextState = { ...state };
		nextState[action.id] = '';
		return nextState;
	}
	return state;
};

export const useForm = initFormState => {
	const [formState, dispatch] = useReducer(formReducer, initFormState);

	const inputHandler = useCallback((id, value) => {
		const action = { type: 'INPUT_CHANGE', id, value };
		dispatch(action);
	}, []);

	const resetInput = useCallback(id => {
		const action = { type: 'RESET', id };
		dispatch(action);
	}, []);

	return {
		formState,
		inputHandler,
		resetInput,
	};
};
