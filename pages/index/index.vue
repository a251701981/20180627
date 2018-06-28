<template>
	<div>app</div>
</template>

<script>
	var host = require('/modules/config.js');
	host = host.host;
	module.exports = {
		data:function(){
			return {
				title:"消息",
				items:[
				    {title:'消息',path:__uri('/pages/message/index.html')},
				    {title:'好友',path:__uri('/pages/message/firend.html')},
				    {title:'群',path:__uri('/pages/group/index.html')},
				    {title:'设置',path:__uri('/pages/setting/index.html')}
				],
				pages:{},
			}
		},
		methods:{
			clickItem:function(index){
				
			},
			openPage:function(path){
				if(typeof this.pages[path] != 'undefined')
				{
					this.pages[path].show();
					return;
				}
				var wv = plus.webview.create(host + path , host + path,{top:'6%',bottom:'6%'});
				wv.hide();
				plus.webview.currentWebview().append(wv);
				this.pages[path] = wv;
			},
		},
		
		created:function(){
			this.openPage(this.items[0].path);
		},
		
	};
</script>

<style>
</style>