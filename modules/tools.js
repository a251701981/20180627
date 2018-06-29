var mui = require('/modules/mui.js');
module.exports = {

	/**
	 * 全局dom事件触发,所有webview都能监听,数据在回调的event.detail
	 * @param event String 事件名称
	 * @paran data Object 数据对象
	 * */
	triggerGloble: function(event, data) {
		var wvs = plus.webview.all();
		for(var i = 0; i < wvs.length; i++) {
			mui.fire(wvs[i], event, data)
		}
	},
	/**
	 * 获取QueryString中的值
	 * @return JSON Object
	 * */
	getUrlVars: function() {
		var vars = {};
		window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi,
			function(m, key, value) {
				vars[key] = decodeURI(value);
			}
		);
		return vars;
	}

};