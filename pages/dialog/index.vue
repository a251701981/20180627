<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">与{{type}}{{name}}的对话</h1>
		</header>

		<ul class="mui-table-view" id="list">
			<li class="mui-table-view-cell mui-media" v-for="item in items">
				<a href="javascript:;">
					<img class="mui-media-object" v-bind:class="[(item.id==selfId)?'mui-pull-left':'mui-pull-right']" :src="item.ico">
					<div class="mui-media-body" v-bind:class="[(item.id==selfId)?'mui-pull-left':'mui-pull-right']">
						<span v-bind:class="[(item.id==selfId)?'name-left':'name-right']">{{item.name}}</span>
						<div style="clear: both;"></div>
						<p class='msg' v-bind:class="[(item.id==selfId)?'mui-pull-left':'mui-pull-right']">{{item.message}}</p>
					</div>
				</a>
			</li>
		</ul>

		<nav class="mui-bar-footer">
			<button class="mui-btn-success" @tap="sendMessage">发送</button>
			<div class="text-wrap">
				<div contenteditable="true" id="text" class="text">{{msg}}</div>
			</div>
		</nav>

	</div>
</template>

<script>
	var tools = require('/modules/tools.js');
	var $ = require('/modules/jquery');
	var host = require('/modules/config.js').host;
	var request = tools.getUrlVars();
	var userInfo = tools.getUserInfo();
	module.exports = {
		data: function() {
			return {
				name: request.name, //对话名称  群名称 | 用户名称
				dialogType: request.type, //对话类型 user 用户  group 群
				selfId: userInfo.id, //自身id
				items: [{
						id: 1,
						message: "hello 你好",
						name: "管理员",
						ico: __uri('/static/imgs/60X60.gif')
					},
					{
						id: 2,
						message: "你好管理员",
						name: "世强",
						ico: __uri('/static/imgs/60X60.gif')
					}
				],
			};
		},
		methods: {
			loadData: function() {

			},
			sendMessage: function() {
				var self = this;
				var input = document.querySelector('#text');
				if(input == null) return;
				if(input.innerHTML == '') return;
				var message = input.innerHTML;	
				input.innerHTML = '';	
				
				this.postMessage(request.id, message, request.type) //发送请求
					.then(function(data) {
						/*更新本地对话列表*/
						self.items.push({
							id: userInfo.id,
							message: message,
							name: userInfo.name,
							ico: userInfo.ico
						});
						/*发送消息成功事件*/
						tools.triggerGloble('sended_message', {
							toId: request.id,
							message: message,
							type: request.type,
							time: data.time
						});
					});
			},
			/**
			 * 发送消息请求
			 * @param toId int 接收者id
			 * @param message 消息内容
			 * @param String 消息类型 user group
			 * @param def Promise 延迟对象
			 * */
			postMessage: function(toId, message, type) {
				var self = this;
				return $.Deferred(function(def) {
					//todo
					def.resolve({
						time: '19:00'
					});
				});
			},
		},
		created: function() {
			this.loadData();
			plus.webview.currentWebview().show();
			plus.nativeUI.closeWaiting();
			tools.triggerGloble('readed_message',{id:request.id,type:request.type}); //触发消息阅读事件
		},
		computed: {
			type: function() {
				var typeMap = {
					user: '用户',
					group: '群'
				};
				return typeMap[request.type];
			},
		},
		updated: function() {
			var list = document.querySelector('#list');
			list.scrollTop = list.scrollHeight;
		},

	};
</script>

<style scoped>
	.mui-bar-footer {
		position: fixed;
		bottom: 0;
		padding-left: 0.1rem;
		width: 10rem;
	}
	
	.mui-btn-success {
		position: fixed;
		right: 0.1rem;
		bottom: 0.2rem;
		height: 0.9rem;
		display: block;
		line-height: 0.7rem;
	}
	
	.text {
		width: 8.2rem;
		min-height: 0.9rem;
		line-height: 0.9rem;
		border: 1px solid #CCCCCC;
		border-radius: 0.2rem;
		background-color: white;
		margin-bottom: 0.2rem;
	}
	
	.mui-table-view {
		margin-top: 1.2rem;
		height: 14rem;
		overflow: auto;
	}
	
	.mui-table-view-cell:after,
	.mui-table-view-cell:before,
	.mui-table-view-cell,
	.mui-table-view:after,
	.mui-table-view:before {
		content: none;
	}
	
	.mui-media-object {
		width: 1.2rem;
		border-radius: 50%;
	}
	
	.msg {
		border-radius: 0.2rem;
		max-width: 7rem;
		white-space: normal;
		background-color: #8A6DE9;
		color: #FFFFFF;
		padding: 0.1rem;
	}
	
	.name-left {
		float: left;
	}
	
	.name-right {
		float: right;
	}
</style>