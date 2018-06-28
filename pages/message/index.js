var Vue = require('/modules/vue.js');
var mui = require('/modules/mui.js');
var app = require('./index.vue');
mui.plusReady(function(){
	
	plus.nativeUI.showWaiting('Loading...');
	new Vue({
		el:'#app',
		components:{app:app}
	});
	
	plus.webview.currentWebview().show();
	plus.nativeUI.closeWaiting();
});
