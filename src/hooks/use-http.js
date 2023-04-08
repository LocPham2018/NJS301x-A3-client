import { useCallback, useState } from 'react';

export const useHttp = () => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestInput, applyData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(requestInput.url, {
				method: requestInput.method ?? 'GET',
				headers: requestInput.headers ?? {},
				credentials: requestInput.credentials ?? 'include',
				body: requestInput.body ?? undefined,
			});

			if (!response.ok) {
				const data = await response.json();
				applyData(data);
				throw new Error(data.message);
			}

			const data = await response.json();
			applyData(data);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	}, []);

	return { isLoading, error, sendRequest };
};
