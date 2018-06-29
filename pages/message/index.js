var Vue = require('/modules/vue.js');
var mui = require('/modules/mui.js');
var app = require('./index.vue');
mui.plusReady(function(){
	
	new Vue({
		el:'#app',
		components:{app:app}
	});
});
