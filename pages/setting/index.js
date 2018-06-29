var Vue = require('/modules/vue.js');
var mui = require('/modules/mui.js');
mui.plusReady(function(){
	plus.nativeUI.showWaiting('Loading...');
	setTimeout(function(){
		plus.nativeUI.closeWaiting();
		console.log(window.location.href);
	},1000);

});
