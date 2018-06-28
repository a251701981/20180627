<template>
	<div>
		<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
			<li class="mui-table-view-cell" v-for="item in items" >
				<div class="mui-slider-cell">
					<div class="oa-contact-cell mui-table">
						<div class="oa-contact-avatar mui-table-cell">
							<img src="/static/imgs/60x60.gif" />
						</div>
						<div class="oa-contact-content mui-table-cell" >
							<div class="mui-clearfix">
								<span class="oa-contact-position mui-h5">{{item.time}}</span>
								<h4 class="oa-contact-name">{{item.name}}</h4>
							</div>
							<div class="oa-contact-position notice" v-show="item.messageCount > 0" >{{item.messageCount}}</div>
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
	module.exports = {
		data:function(){
			return {
				items:[
				    {id:1,name:'叶文杰',newMessage:'最新消息1',messageCount:0,time:'17:00'},
				    {id:2,name:'哎AA',newMessage:'最新消息233',messageCount:0,time:'18:00'},
				    {id:3,name:'罗辑',newMessage:'一个消息一个消息一个消息一个消息一个消息一个消息aaaaaaa',messageCount:0,time:'19:00'},
				    {id:4,name:'世强',newMessage:'一个消息',messageCount:5,time:'20:00'}
				],
			}
		},
	};
</script>

<style scoped >
	.title{
				margin: 20px 15px 10px;
				color: #6d6d72;
				font-size: 15px;
			}
			
			.oa-contact-cell.mui-table .mui-table-cell {
				padding: 11px 0;
				vertical-align: middle;
			}
			
			.oa-contact-cell {
				position: relative;
				margin: -11px 0;
			}
	
			.oa-contact-avatar {
				width: 75px;
			}
			.oa-contact-avatar img {
				border-radius: 50%;
			}
			.oa-contact-content {
				width: 100%;
			}
			.oa-contact-name {
				margin-right: 20px;
			}
			.oa-contact-name {
				float: left;
			}
			.oa-contact-position {
				float:right;
			} 
			.notice {
				background: red;
				padding: 0.1rem;
				width:0.6rem;
				height:0.6rem;
				color:white;
				border-radius:50%;
				text-align: center;
			}
			.oa-contact-email {
				display: block;
				width:7rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space:nowrap;
			}
</style>