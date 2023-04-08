// Cart update functions
export const addItemToCart = (cart, item) => {
	const total = cart.total + item.qty * +item.product.price;
	const items = cart.items;

	const foundItemId = items.findIndex(
		cartItem => cartItem.product._id === item.product._id
	);
	if (foundItemId === -1) {
		items.push(item);
	} else {
		const foundItem = items[foundItemId];
		foundItem.qty += item.qty;
		items.splice(foundItemId, 1, foundItem);
	}

	return { items, total };
};

const decrementProductQty = (cart, product) => {
	const total = cart.total - product.price;
	const items = cart.items;

	const foundItemId = items.findIndex(
		cartItem => cartItem.product._id === product._id
	);
	const foundItem = items[foundItemId];

	if (foundItem.qty > 1) {
		foundItem.qty--;
		items.splice(foundItemId, 1, foundItem);
	} else {
		items.splice(foundItemId, 1);
	}

	return { items, total };
};

export const updateCartItem = (cart, product, isDecrement) => {
	if (isDecrement) {
		return decrementProductQty(cart, product);
	}
	return addItemToCart(cart, { product, qty: 1 });
};

export const deleteProductFromCart = (cart, product) => {
	const total = cart.total - product.price;
	const items = cart.items;

	const foundItemId = items.findIndex(
		cartItem => cartItem.product._id === product._id
	);

	items.splice(foundItemId, 1);

	return { items, total };
};
