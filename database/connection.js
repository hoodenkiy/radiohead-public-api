const mongoose = require('mongoose');

module.exports = async () => {
	try {
		await mongoose.connect('mongodb://localhost/radiohead', {useNewUrlParser: true});
		console.log('Database Connected')
	} catch (error) {
		console.log('Database Connectivity Error')
		console.log(error)
	}
};
