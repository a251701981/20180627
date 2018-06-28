var Vue = require('/modules/vue.js');
var mui = require('/modules/mui.js');
mui.plusReady(function(){
	plus.nativeUI.showWaiting('Loading...');
	setTimeout(function(){
		plus.webview.currentWebview().show();
		plus.nativeUI.closeWaiting();
	},1000);

});
