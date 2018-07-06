var mui = require('/modules/mui.js');
var config = require('/modules/config.js');
module.exports = {

	/**
	 * 全局dom事件触发,所有webview都能监听,数据在回调的event.detail
	 * @param event String 事件名称
	 * @paran data Object 数据对象
	 * */
	triggerGloble: function(event, data) {
		var wvs = plus.webview.all();
		for(var i = 0; i < wvs.length; i++) {
			mui.fire(wvs[i], event, data);
		}
	},
	/**
	 * 显示指定webview
	 * @param webViewObj wv webview对象
	 * */
	showWebview:function(wv){
		plus.webview.show(wv.id,'slide-in-right');
	},
	/**
	 * 获取页面间的传值
	 * @return JSON Object
	 * */
	getRequest: function() {
		var str = localStorage.getItem('queryParam');
		if(str == '' || str == null ||str == false) return {};
		return JSON.parse(str);
	},
	/**
	 * 设置页面间的传值
	 * @param Json Object data
	 * @return Boolean true | false
	 * */
	setRequest:function(data){
		localStorage.setItem('queryParam',JSON.stringify(data));
	},
	/**
	 * 获取页面绝对路径
	 * @param String url
	 * @return String url
	 * */
	getRealUrl:function(url){
		return config.host + url;
	},
	/**
	 * 获取当前用户信息
	 * @return Json Object
	 * */
	getUserInfo:function()
	{
		//todo
		return {id:1,name:'管理员',ico:"/static/imgs/60X60.gif"};
	},

};