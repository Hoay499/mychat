<template>
	<view class="content">
       <view class="top-bar">
		   <view class="top-bar-left">
			   <img src="/static/protrait/cp.jpg" alt="">
		   </view>
		   <view class="top-bar-center">
			 <img src="/static/index/logo.png" alt="">
		   </view>
		   <view class="top-bar-right"  >
			   <view class="search" @tap="pageturnto('search')">
				   <img src="/static/index/search.png" alt="">
			   </view>
			  <view class="add">
				  <img src="/static/index/addgroup.png" alt="">
			  </view>
		   </view>
	   </view>
		
		<view class="ChatLists">
			<view class="FreindApply">
				<view class="chatleft">
					<text class="newscount">1</text>
					<img src="/static/protrait/friendapply.png" alt="">
				</view>
				<view class="chatright">
					<h2 class="newstitle">好友申请</h2>
					<text class="time">12:37</text>
					<view class="newscontent singletextellipsis">如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。</view>
				</view>
			</view>
			<view class="PrivateChat" v-for="(item,index) in FriendLists" :key="index">
				 
				<view class="chatleft">
					<text class="newscount" v-show="item.counts!=0">{{item.counts}}</text>
					<img v-bind:src="item.imgurl" alt="">
				</view>
				<view class="chatright">
					<h2 class="newstitle">{{item.name}}</h2>
					<text class="time">{{item.time}}</text>
					<view class="newscontent singletextellipsis">{{item.news}}</view>
				</view>
			</view>
			<view class="GroupChat">
				<view class="chatleft">
					<text class="newscount">134</text>
					<img src="/static/protrait/erke.jpg" alt="">
				</view>
				<view class="chatright">
					<h2 class="newstitle">周二珂 </h2>
					<text class="newscontent"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Pubmain from '../../js/main.js';
	import main from '../../mydoc/main.js';
	import staticdata from '../../mydoc/staticdata.js';
	export default {
		data() {
			return {
				FriendLists:[]
			}
		},
		onLoad() {
			this.getFriendChatLists();
		},
		methods: {
			pageturnto:function(page){
				Pubmain.pageTurnTo(page);
			},
			getFriendChatLists:function(){
				// console.log(this);
				this.FriendLists = staticdata.friends();
				 // 2020-06-15 12:03:56
				// console.log(this.FriendLists);
				this.FriendLists.forEach(function(list){
					list.imgurl = '/static/protrait/'+list.imgurl;
					list.time =  main.getCurrentTimeDifferences(list.time);
				})
				
			} ,
			

		}
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		height: 400upx;
		
		
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;

	}
	/* top-bar  begin */
	img{
		width: 100%;
		height: 100%;
	}
    .top-bar{
		top: 0rpx;
		
		 /* 解决自定义导航栏手机顶部状态栏区域会被页面内容覆盖 */
		/* box-sizing: border-box; */
		padding-top: var(--status-bar-height);
		
		
		position: fixed;
		width: 100%;
		height: 88rpx;
		background: $uni-bg-color;
		box-shadow: 0pt 1pt 0pt 0pt rgba(0,0,0,0.1); 
		height: 88rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		z-index: 1;
		background: white;
	}
	.top-bar-left{
		width: 68rpx;
		height: 68rpx;
		margin-left: 32rpx;
		padding-top: 12rpx;
	}
	.top-bar-left img{
		border-radius:16rpx;
	}
	.top-bar-center{
		padding-top: 16rpx;
		width: 88rpx;
		height: 42rpx;
		/* margin-left: 232rpx; */
	}
	.top-bar-right{
		
		margin-right:32rpx;
		display: flex;
		flex-flow: nowrap;
		/* justify-content: flex-end; */
	}
	.top-bar-right .search,.add{
		padding-top: 12rpx;
		width: 40rpx;
		height: 40rpx;	
		align-items: center;
		justify-content: center;
    } 
	.search{
		/* margin-left: 32rpx; */
		
		margin-left: 32rpx;
	}
	.add{
		margin-left: 32rpx;
	}
	/* top-bar  ---end */
	
	
	/* ChatList begin-----  */
	.ChatLists{
		padding-top: 16rpx;
		margin-top: 88rpx;
		display:flex;
		flex-direction:column;
		width:100%; 
		z-index: 999;
		align-items: center;
		 
	}
	.FreindApply,.PrivateChat,.GroupChat{
		margin-top: 40rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: 96rpx;
		
	}
	.FreindApply:hover,.PrivateChat:hover,.GroupChat:hover{
		background: #f3f3f3;
	}
	.chatleft{
		width:96rpx;
		height:96rpx;
		background: yellow;
		position:relative;
	}
	.chatright{
		width:558rpx;
		height:96rpx;
		position:relative;
	}
	.newscount{
		padding: 4rpx;
		position:absolute;
		width:auto;
		min-width:42rpx;
		text-align: center;
		line-height: 36rpx;
		max-width:54rpx;
		height:36rpx;
		right:-18rpx;
		top:-10rpx;
		border-radius:16rpx;
		background:#ff5d5b;
		color: white;
		font-size: 24rpx;
	}
	.chatleft img{
		border-radius:16rpx;
	}
	
	.time{
		position: absolute;
		top: 4rpx;
		right: 2rpx;
		min-width: 92rpx;
		height: 34rpx;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: right;
		color: rgba(39,40,50,0.4);
		line-height: 34rpx;
		letter-spacing: 0rpx;
	}
	.newstitle{
		max-width:170rpx;
		width:auto;
		height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #272832;
		line-height: 50rpx;
		letter-spacing: -2rpx;
	}
	.newscontent{
		max-width: 542rpx;
		height: 40rpx;
		font-size: 28rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: rgba(39,40,50,0.6);
		line-height: 40rpx;
		letter-spacing: 0rpx;
	}
    .singletextellipsis{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.multitextellipsis{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	/* ChatList end-----  */
</style>
