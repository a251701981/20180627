var Vue = require('/modules/vue.js');
var mui = require('/modules/mui.js');
mui.plusReady(function(){
	
	setTimeout(function(){
		plus.webview.show(plus.webview.currentWebview().id);
		plus.nativeUI.closeWaiting();	
	},1000);

});
