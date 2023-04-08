import { createStore } from 'redux';

import { getCartFromStorage, saveCartToStorage } from '../others/storage';
import { addItemToCart, deleteProductFromCart, updateCartItem } from './cart';

const initState = {
	popupProduct: null,
	loginUser: null,
	cart: getCartFromStorage(), // load cart object from localStorage when launching
};

const storeReducer = (state = initState, action) => {
	let cart;
	switch (action.type) {
		case 'SHOW_POPUP':
			return { ...state, popupProduct: action.product };
		case 'HIDE_POPUP':
			return { ...state, popupProduct: null };
		case 'ON_LOGIN':
			return { ...state, loginUser: action.user };
		case 'ON_LOGOUT':
			return { ...state, loginUser: null };
		case 'ADD_CART':
			cart = addItemToCart(state.cart, action.item);
			saveCartToStorage(cart);
			return { ...state, cart };
		case 'UPDATE_CART':
			cart = updateCartItem(
				state.cart,
				action.product,
				action.isDecrement
			);
			saveCartToStorage(cart);
			return { ...state, cart };
		case 'DELETE_CART':
			cart = deleteProductFromCart(state.cart, action.product);
			saveCartToStorage(cart);
			return { ...state, cart };
		// case 'LOAD_CART':
		// 	const { items } = action;
		// 	const total = items.reduce(
		// 		(accumulate, item) =>
		// 			accumulate + +item.product.price * item.qty
		// 	);
		// 	return {
		// 		...state,
		// 		cart: { items, total },
		// 	};
		case 'RESET_CART':
			return { ...state, cart: { items: [], total: 0 } };
		default:
			return state;
	}
};

export const store = createStore(storeReducer);

// Action creators. With these creators, we don't need to type action type manually.
export const actions = {
	showPopup: product => {
		return { type: 'SHOW_POPUP', product };
	},
	hidePopup: () => {
		return { type: 'HIDE_POPUP' };
	},
	onLogin: user => {
		return { type: 'ON_LOGIN', user };
	},
	onLogout: () => {
		return { type: 'ON_LOGOUT' };
	},
	addCart: item => {
		return { type: 'ADD_CART', item };
	},
	updateCart: (product, isDecrement = false) => {
		return { type: 'UPDATE_CART', product, isDecrement };
	},
	deleteCart: product => {
		return { type: 'DELETE_CART', product };
	},
	// loadCart: items => {
	// 	return { type: 'LOAD_CART', items };
	// },
	resetCart: () => {
		return { type: 'RESET_CART' };
	},
};
