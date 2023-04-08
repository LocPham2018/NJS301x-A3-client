export const getUsersFromStorage = () => {
	return JSON.parse(localStorage.getItem('USERS')) ?? [];
};

export const saveUsersToStorage = userArr => {
	localStorage.setItem('USERS', JSON.stringify(userArr));
};

export const getLoginUser = () => {
	return JSON.parse(localStorage.getItem('LOGIN_USER'));
};

export const saveLoginUser = user => {
	localStorage.setItem('LOGIN_USER', JSON.stringify(user));
};

export const removeLoginUser = () => {
	localStorage.removeItem('LOGIN_USER');
};

export const getCartFromStorage = () => {
	return (
		JSON.parse(localStorage.getItem('CART')) ?? {
			items: [],
			total: 0,
		}
	);
};

export const saveCartToStorage = cart => {
	localStorage.setItem('CART', JSON.stringify(cart));
};

export const removeCart = () => {
	localStorage.removeItem('CART');
};
