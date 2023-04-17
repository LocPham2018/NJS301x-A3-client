import { useEffect } from 'react';

import { useHttp } from './use-http';
import { SERVER_URL } from '../others/request';

export const useGetRequest = (endpoint, applyData) => {
	const { isLoading, error, sendRequest } = useHttp();

	useEffect(() => {
		const url = `${SERVER_URL}${endpoint}`;
		sendRequest({ url }, applyData);
	}, [applyData, endpoint, sendRequest]);

	return { isLoading, error };
};

export const useSubmitRequest = () => {
	const { isLoading, error, sendRequest } = useHttp();

	const submitRequest = (endpoint, options, applyData) => {
		const requestInput = {
			url: `${SERVER_URL}${endpoint}`,
			...options,
		};
		sendRequest(requestInput, applyData);
	};

	return { isLoading, error, submitRequest };
};
