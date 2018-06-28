var Vue = require('/modules/vue.js');
var app = require('./index.vue');
var mui = require('/modules/mui.js');

mui.plusReady(function(){
	
	new Vue({
		el:'#app',
		components:{app:app}
	});
	
	
});
