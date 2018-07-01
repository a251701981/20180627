<template>
	<div>
		<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
			<li class="mui-table-view-cell" v-for="item in items" @tap="click(item.id,item.type,item.name)">
				<div class="mui-slider-cell">
					<div class="oa-contact-cell mui-table">
						<div class="oa-contact-avatar mui-table-cell">
							<img src="/static/imgs/60x60.gif" />
						</div>
						<div class="oa-contact-content mui-table-cell">
							<div class="mui-clearfix">
								<span class="oa-contact-position mui-h5">{{item.time}}</span>
								<h4 class="oa-contact-name">{{item.name}}</h4>
							</div>
							<div class="oa-contact-position notice" v-show="item.messageCount > 0">{{item.messageCount}}</div>
							<span class="oa-contact-email mui-h4">
								{{item.newMessage}}
							</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	var mui = require('/modules/mui.js');
	var $ = require('/modules/jquery.js');
	var tools = require('/modules/tools.js');
	var config = require('/modules/config.js');
	module.exports = {
		data: function() {
			return {
				items: [{
						id: 1,
						name: '叶文杰',
						ico:'/static/imgs/60x60.gif',
						newMessage: '最新消息1',
						messageCount: 0,
						time: '17:00',
						type:'user'
					},
					{
						id: 2,
						name: '哎AA',
						ico:'/static/imgs/60x60.gif',
						newMessage: '最新消息233',
						messageCount: 0,
						time: '18:00',
						type:'user'
					},
					{
						id: 3,
						name: '罗辑',
						ico:'/static/imgs/60x60.gif',
						newMessage: '一个消息一个消息一个消息一个消息一个消息一个消息aaaaaaa',
						messageCount: 0,
						time: '19:00',
						type:'user'
					},
					{
						id: 4,
						name: '世强',
						ico:'/static/imgs/60x60.gif',
						newMessage: '一个消息',
						messageCount: 5,
						time: '20:00',
						type:'user'
					}
				],
			}
		},
		methods: {
			
			click: function(id,type,name) {
				plus.nativeUI.showWaiting('Loading...');
				var path = config.host + __uri('/pages/dialog/index.html') + '?id=' + id + '&type=' + type + '&name=' + name;
				plus.webview.create(path,path);
			},
			loadData: function() {
				//todo
				plus.webview.currentWebview().show();
				plus.nativeUI.closeWaiting();
			},
			/**
			 * 更新消息阅读状态
			 *@param formId 发送者id
			 *@parma type 消息类型
			 * */
			postReaded:function(fromId,type)
			{
				return $.Deferred(function(def){
					//todo
					def.resolve(1);
				});
			}
		},
		created: function() {
			this.loadData();
			var vm = this;
			/*
			 * 新消息事件 new_message
			 * detail:{id：发送者id,name:发送者名字,ico:发送者头像,newMessage:消息内容,messageCount:消息条数,time:发送时间}
			 * */
			document.addEventListener('new_message', function(event) {
				for(var i = 0; i < vm.items.length; i++) {
					if(event.detail.id == vm.items[i].id  && event.detail.type==vm.items[i].type) //更新
					{
						event.detail.messageCount = vm.items[i].messageCount + 1;
						vm.$set(vm.items, i, event.detail);
						return; //更新一条记录
					}
				}
				/*或者增加一条*/
				vm.items.push(event.detail);
			});

			/**
			 * 消息被阅读事件 readed_message
			 * detail:{id:发送者id,type:消息类型}
			 * */
			document.addEventListener('readed_message', function(event) {
				for(var i = 0; i < vm.items.length; i++) {
					if(event.detail.id == vm.items[i].id && event.detail.type==vm.items[i].type) //更新
					{
						if(vm.items[i].messageCount == 0) return;
						vm.postReaded(event.detail.id,event.detail.type) //更新阅读状态到远程
						.then(function(){
							var message = mui.extend({}, vm.items[i]);
						    message.messageCount = 0;
						    vm.$set(vm.items, i, message);
						});
						return; //更新一条记录的维度消息数
					}
				}
			});
			
			/**
			 * 发送消息成功事件 sended_message
			 * detail:{toId:接收者id,message:消息类型,type:消息类型,time:发送时间}
			 * */
			document.addEventListener('sended_message', function(event) {
				for(var i = 0; i < vm.items.length; i++) {
					if(event.detail.toId == vm.items[i].id && event.detail.type == vm.items[i].type) //更新
					{
						var message = mui.extend({}, vm.items[i]);
						message.newMessage = event.detail.message;
						message.time = event.detail.time;
						vm.$set(vm.items, i, message);
						return; //更新一条记录的最后消息内容和时间
					}
				}
			});

		},
	};
</script>

<style scoped>
	
	.oa-contact-cell .mui-table .mui-table-cell {
		vertical-align: middle;
	}
	
	.oa-contact-cell {
		position: relative;
	}
	
	.oa-contact-avatar {
		width: 1.5rem;
	}
	
	.oa-contact-avatar img {
		border-radius: 50%;
	}
	
	.oa-contact-content {
		width: 100%;
		padding-left:0.2rem;
		padding-right:0.2rem;
		padding-top:0;
		padding-bottom: 0;
	}
	

	
	.oa-contact-name {
		float: left;
	}
	
	.oa-contact-position {
		float: right;
	}
	
	.notice {
		background: red;
		padding: 0.1rem;
		width: 0.6rem;
		height: 0.6rem;
		color: white;
		border-radius: 50%;
		text-align: center;
		line-height: 0.5rem;
		font-size: 0.3rem;
	}
	
	.oa-contact-email {
		display: block;
		width: 6.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>