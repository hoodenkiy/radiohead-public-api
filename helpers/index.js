export const formatMongoData = (data) => {
	if (Array.isArray(data)) {
		return data.map(item => {
			return item.toObject();
		});
	}
console.log(data);

	return data.toObject();
};
