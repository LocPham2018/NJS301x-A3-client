const formatPrice = price => {
	const digits = price.split('');
	let result = '';
	let subString = '';
	while (digits.length > 0) {
		subString = digits.pop() + subString;
		if (subString.length % 3 === 0 && digits.length > 0) {
			result = '.' + subString + result;
			subString = '';
		}
		if (digits.length === 0) {
			result = subString + result;
			subString = '';
		}
	}
	return result;
};

export default formatPrice;
