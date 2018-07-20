<template>
	<div>
		<ul class="mui-table-view firends">
			<li class="mui-table-view-cell firends-item">
			    <div class="firends-item-left" >
				    <img src="/static/imgs/60X60.gif" />
				</div>
				<div class="firends-item-mid" >
				    <div class="firends-item-mid-up" ><h4>昵称</h4></div>
					<div class="firends-item-mid-dow" >
					    <div class="firends-item-mid-dow-state" >
						    <h5>[在线]</h5>
						</div>
						<div class="firends-item-mid-dow-sign" >
						    签名.....签名签名签名签名签名签名签名签名签名
						</div>
					</div>
				</div>
			</li>
						<li class="mui-table-view-cell firends-item">
			    <div class="firends-item-left" >
				    <img src="/static/imgs/60X60.gif" />
				</div>
				<div class="firends-item-mid" >
				    <div class="firends-item-mid-up" ><h4>昵称</h4></div>
					<div class="firends-item-mid-dow" >
					    <div class="firends-item-mid-dow-state" >
						    <h5>[在线]</h5>
						</div>
						<div class="firends-item-mid-dow-sign" >
						    签名.....签名签名签名签名签名签名签名签名签名
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
    module.exports = {};
</script>

<style scoped >
    .firends-item-left{float:left;width:1.4rem;height:1.4rem;}
	.firends-item-left img{width:1.4rem;height:1.4rem;display:block;border-radius:50%;}
	.firends-item-mid{float:left;width:7.4rem;height:1.4rem;padding-left:0.1rem;}
	.firends-item-mid-up{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
	.firends-item-mid-dow-state,.firends-item-mid-dow-sign{float:left;}
	.firends-item-mid-dow-sign{padding-left:0.1rem;text-overflow:ellipsis;overflow:hidden;width:6rem;height:0.7rem;white-space:nowrap;}
	.firends-item-mid-dow,.firends-item-mid-up{line-height:0.7rem;}
</style>