var $ = require('jquery');
window.jQuery = $;
var select2 = require('select2');
$.fn.extend({
	select2:select2(window,$)
});
module.exports = $;