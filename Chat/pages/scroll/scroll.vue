<template>
	<view style="height:500px">
		<scroll-view class="chatlist" scroll-y="true"scroll-with-animation="true" scroll-into-view="scrollindex">
		     
		     	<view class="list" v-for="item in msg" :key="item.id" :id="'msg'+item.id" >
		     		<view class="time mt20" v-if="item.time">{{item.time}}</view>
		     		<view  :class="[ oneself == item.userid ? 'oneself':'someoneelse','mt20']"  >
		     			<!-- :key="item.id" -->
		     			<img :src="item.imgurl" alt="" class="userproprait">
		     			
		     			<view :class="[ oneself == item.userid ? 'bgon':'bgob','chatcontent']" v-if="item.type == 0">{{item.content}}</view>
		     			<view class="chatcontentimg" v-else-if="item.type == 1" @tap="previewImage(item.content)">
		     				<img :src="item.content" alt="">
		     			</view>
		     			
		     		</view> 
		     	</view>
		</scroll-view>
	</view>
	
</template>

<script>
	import staticdata from "../../mydoc/staticdata.js";
	export default {
		data() {
			return {
				msg:[],
				imgMsg:[],//图片消息列表
				oneself:'1233',
				chatTimeCountDown: 5000,
				scrollindex:'',
			};
		},
		onLoad(){
			this.getChatMessage();
			this.timeCountDown();
		},
		 
		methods:{
			getChatMessage:function(){
				let msgt = staticdata.getChatList();
				
	
				msgt.forEach(function(item){
					item.imgurl = '../../static/protrait/'+item.imgurl;
					
					if(this.chatTimeCountDown == 0){
						item.time = main.getCurrentTimeDifferences(item.time);
					}else{
						item.time = '';
					}
					
					
					if(item.type == 1){ //消息类型为图片
						item.content = '../../static/protrait/'+item.content;
						// this.imgMsg.unshift(item.content); //插到数组的开头
						this.imgMsg.push(item.content); 
					}
					this.$nextTick(function(){
						this.scrollindex= 'msg1238';
						console.log(this.scrollindex);
					})
					
					// this.msg.unshift(item);
					this.msg.push(item); 
					
					// console.log(this.msg);
				},this)
			},
			backto:function(i){
				myuni.backto(i);
			},
			previewImage:function(e){
				let index =0;
				try{
					this.imgMsg.forEach(function(item){
						if(e == item){
							  throw new Error("EndIterative");
						}
						
						index++;
					})
				}catch(e) {
					if(e.message!="EndIterative") throw e;
				}
				uni.previewImage({
					current:index,
					urls: this.imgMsg,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
				 
			},
			timeCountDown:function(){
				setInterval(function(){
					if(this.chatTimeCountDown != 0)
						this.chatTimeCountDown --;
				},1000);
			},
			inputs:function(e){
				console.log(e);
				// item.imgurl = '../../static/protrait/'+item.imgurl;
				let msg = {
				     id : 121138,
					 userid:1233,
					 imgurl:'../../static/protrait/w7.jpg',
					 name: '周二珂',
					 time : '2020-06-16 12:12:03',
					 content: e,
				     type:0
				};
				this.scrollindex= 'msg121138';
				this.msg.push(msg); 
			}
		}
	}
</script>

<style lang="scss">
@import "../../mydoc/scss/public.scss";
	.content {
		margin-top: 120rpx;
		text-align: center;
		height: 1282rpx;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;
		position: relative;
		overflow: hidden;
	}
	body{
		height: 100%;
	}

	 
	
	.chatlist{
		display:block;
		background: #f4f4f4;
		width: 100%;
		top:40rpx;
		 
		height: 1000rpx;
		align-items: center;
		flex-direction: column;
		padding: 80rpx 20rpx;
	}
	.mt20{
		margin-top:40rpx	
	}
	.time{
	  	justify-self:center;
		 
		height: 34rpx;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: rgba(39,40,50,0.3);
		line-height: 34rpx;
		letter-spacing: 0rpx;

	}
	
	.someoneelse{
		width: 686rpx;
		display:flex;
		flex-shrink: 0; //取消元素收缩
		align-items:flex-start;
	}
	.oneself{
		width: 686rpx;
		display:flex;
		 flex-shrink: 0;
		align-items:flex-start;
		flex-direction: row-reverse;
	}	
	.userproprait{
		width:80rpx;
		height:80rpx;
		border-radius: 20rpx;
	}
	.chatcontentimg{
		max-width: 284rpx;
		 
		max-height: 320rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
	.chatcontentimg img {
		border-radius:20rpx; 
	}
	.chatcontent{
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-sizing:border-box;
		padding:16rpx 24rpx 16rpx 22rpx;
		max-width: 480rpx;
		border-radius: 0rpx 20rpx 20rpx 20rpx;
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #272832;
		line-height: 44rpx;
		letter-spacing: 2rpx;
		// white-space: pre-line;
		word-break: break-all;
	}
	.bgon{		 
		background: #ffffff;
	}
	.bgob{ 
		background: #ffe431;
	}
	.bottom{
		position: fixed;
		bottom: 0rpx;
		width: 100%; 
		 background:rgba(250,250,250,0.9);
		 box-shadow: 0rpx 2rpx 0rpx 0rpx rgba(0,0,0,0.25) inset; 
		 height: 98rpx;
	}
	
</style>

