<template>
	<div>
		<header class="mui-bar mui-bar-nav" style="height:1.1rem;background: #007AFF;" >
			<a class="mui-pull-left"></a>
			<h1 class="mui-title">{{title}}</h1>
		</header>
		<div class="mui-content" >
			
		</div>
	    <nav class="mui-bar mui-bar-tab" style="height:1rem;" >
			<a class="mui-tab-item mui-active" @tap="clickItem(0)" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">{{items[0].title}}</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat" @tap="clickItem(1)" >
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">{{items[1].title}}</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact" @tap="clickItem(2)" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">{{items[2].title}}</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map" @tap="clickItem(3)" >
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">{{items[3].title}}</span>
			</a>
		</nav>
	</div>
</template>

<script>
	var host = require('/modules/config.js');
	var mui = require('/modules/mui.js');
	host = host.host;
	module.exports = {
		data:function(){
			return {
				title:"消息",
				currPath:'',
				items:[
				    {title:'消息',path:__uri('/pages/message/index.html')},
				    {title:'好友',path:__uri('/pages/firend/index.html')},
				    {title:'群',path:__uri('/pages/group/index.html')},
				    {title:'设置',path:__uri('/pages/setting/index.html')}
				],
				pages:{},
			}
		},
		methods:{
			clickItem:function(index){
				this.openPage(this.items[index].path);
				this.title = this.items[index].title;
			},
			openPage:function(path){
				if(path == this.currPath) return; //已经是目标页面
				if(typeof this.pages[path] != 'undefined')
				{
					this.pages[path].show();  //目标页已经创建直接显示
					this.currPath = path; 
					return;
				}
			    plus.nativeUI.showWaiting('Loading...');
				var wv = plus.webview.create(host + path , host + path,{top:(_rem*1.1)+'px',bottom:(_rem*1.4)+'px'});  //创建目标页
				wv.hide();
				plus.webview.currentWebview().append(wv);
				this.pages[path] = wv;
				this.currPath = path;
			},
		},
		
		directives:{
			progress:function(el){
				
			}
		},
		
		created:function(){
			this.openPage(this.items[0].path);
		},
		
	};
</script>

<style scoped >
	
</style>