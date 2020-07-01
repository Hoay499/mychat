<template>
	<view class="content">
		<view class="top-bar">
		   <view class="top-bar-left">
				<img src="/static/register/backleft.png" alt=""> 
		   </view>
		   <view class="top-bar-center">
			  好友请求
		   </view>
		 
		    <view class="top-bar-right" >
			    
		   </view>  
		</view>
		<view class="main">
				<view class="item" v-for="(item,index) in friendrequest" :key="item.id">
					
					 <view class="refuse tc" @tap="refuse(item.id)">拒绝</view>
					<view class="accept tc" @tap="accept(item.id)">同意</view>
					<view class="center">
						<img :src="item.imgurl" alt="" class="headprofile">
						<text class="username">{{item.name}}</text>
						<text class="time">{{item.time}}</text>
						<text class="applycontent multitextellipsis">{{item.content}}</text>
					</view>
					
				</view>

				<view class="item">
					
					<view class="refuse tc">拒绝</view>
					<view class="accept tc">同意</view>
					<view class="center">
						<img src="/static/protrait/erke.jpg" alt="" class="headprofile">
						<text class="username">邓紫棋</text>
						<text class="time">2020-02-01</text>
						<text class="applycontent multitextellipsis">sdfaewf ewfrwqefewqgrfewqe使劲地哦啊发和武器哦ID审核voefhuqiwfeifowq 我完全恢复IE我</text>
					</view>
					
				</view>

			</view>
			
		</view>
		
	</view>
</template>

<script>
	import staticdata from '../../mydoc/staticdata.js';
	export default {
		data() {
			return {
				friendrequest:[],
			};
		},
		onLoad() {
			this.getFriendRequest();
		},
		methods:{
			getFriendRequest:function(){
				this.friendrequest = staticdata.getFriendRequest();
			},
			refuse:function(id){
				// 拒绝操作
				this.remove(id);
			},
			accept:function(id){
				// 接受操作
				this.remove(id);
			},
			remove:function(id){
				
				for(let j=0;j<this.friendrequest.length;j++){
                        if(this.friendrequest[j].id == id){
                            this.friendrequest.splice(j,1);
                            break;
                        }
                    }
				// this.friendrequest.remove()
			}
		}
	}
</script>

<style lang="scss">
@import '../../mydoc/scss/public.scss';
.content {
		
		// background: #007AFF;
		height: 100vh;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;

}
*{
	margin: 0;
	padding: 0;
}
.top-bar{
		height: 88rpx;
		top: 20rpx;
		background: rgba(255,255,255,0.99);
		border-bottom: 1px solid #C0C0C0;
	}
	.main{
		margin-top: 240rpx;
		z-index: -1;
 
		height:500rpx;
		width:100%;
	}

	.top-bar-center{
		height: 48rpx;
		width: 554rpx;
		text-align: center;
	}
	.top-bar-left{
		// background: red;
		height: 48rpx;
		width: 32rpx;
		margin-left: 32rpx;
	}
	.top-bar-right{
		 
		 // background: #007AFF;
		 width: 52rpx;
		 height: 12rpx;
		 
	} 
	
	.item{
		margin: 112rpx auto;
		width: 686rpx;
		height: 416rpx;
		background: #ffffff;
		border-radius: 20rpx;
		box-shadow: 0rpx 24rpx 64rpx -8rpx rgba(0,0,0,0.1); 
		position: relative;
	}
	.tc{
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left; 
		line-height: 64rpx;
		letter-spacing: -1rpx;

	}
	 .refuse{
		width: 160rpx;
		height:64rpx;
		background: rgba(255,93,91,0.1);
		border-radius:40rpx;
		text-align: center;
		color: #ff5d5b;
		position: absolute;
		left: 32rpx;
		top: 30rpx;
	 }
	 .accept{
		position: absolute;
		width: 160rpx;
		height:64rpx;
		background: #ffe431;
		color: #272832;
		border-radius:40rpx;
		text-align: center;
		right: 32rpx;
		top: 30rpx;
	 }
	 .center{
		width: 622rpx;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	 }
	.headprofile{
		width: 144rpx;
		height: 144rpx;
		border-radius: 50%;
		margin-top: -50rpx;
	}
 
	 .username{
		margin-top: 40rpx;
		max-width: 348rpx;
		height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		text-align: center;
		color: #272832;
		line-height: 50rpx;
		letter-spacing: 2rpx;
	}
	 .time{
		width: 182rpx;
		height: 34rpx;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: center;
		color: rgba(39,40,50,0.4);
		line-height: 34rpx;
		letter-spacing: 0rpx;
	 }
	 .applycontent{
		    margin-top: 40rpx;
			max-width: 622rpx;
			max-height:120rpx;
			background: #f3f4f6;
			border-radius: 20rpx;
			box-sizing: border-box;
			padding:20rpx 22rpx 20rpx 32rpx;
			font-size: 24rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #272832;
			line-height: 40rpx;
			letter-spacing: 0rpx;
	 }
</style>
