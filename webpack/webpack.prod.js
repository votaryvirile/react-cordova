const path = require('path');
const common = require('./webpack.common.js');

module.exports = common({
	mode: 'production',
});