<template>
	<div>
		<header class="mui-bar mui-bar-nav" style="height:6%;position: fixed;">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">与{{type}}{{name}}的对话</h1>
		</header>
		<nav class="mui-bar mui-bar-tab" style="height:5%;" >
			<div>
				<button type="button" style="float:right;" class="mui-btn mui-btn-primary" >send</button>
				<div contenteditable="true"  style="padding: 0;margin: 0;width:7rem;" ></div>
			</div>
		</nav>
	</div>
</template>

<script>
	var tools = require('/modules/tools.js');
	var request = tools.getUrlVars();
	module.exports = {
		data:function(){
			return {
				name:request.name
			};
		},
		methods: {
			loadData:function(){
				
			},
		},
		created: function()
		{
			this.loadData();
			plus.webview.currentWebview().show();
			plus.nativeUI.closeWaiting();
		},
		computed:{
			type:function(){
				var typeMap = {user:'用户',group:'群'};
				return typeMap[request.type];
			}
		},
		

	};
</script>

<style>

</style>