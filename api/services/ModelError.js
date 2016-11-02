module.exports = function(message) {
	var err = new Error();
	err.name = 'Validation';
	err.code = 'E_UNIQUE';
	err.invalidAttributes = {};
	err.message = message;

	return err;
};
