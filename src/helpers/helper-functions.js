export const addCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const removeCommas = (x) => {
	return x.toString().replace(/,/g, '');
};
