// export const SERVER_URL = 'http://localhost:5000'; // development purpose
export const SERVER_URL = 'https://njs-301x-a3-server.vercel.app';

export const ENDPOINTS = {
	register: '/auth/signup',
	login: '/auth/login',
	logout: '/auth/logout',
	session: '/auth/session',
	getProducts: '/products/all',
	getOrders: '/client/orders',
	getBill: '/client/orders/bill',
	checkout: '/client/checkout',
};

export const getPostOptions = (data = null) => {
	return {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	};
};
