<template>
	<view class="content">
			<view class="top-bar">
				   <view class="top-bar-left">
					  <input type="text"  value="" v-model="keyvalue">
					  <view class="search" @tap="search">
						  <img src="/static/search/search.png" alt="">
					  </view>
					  
				   </view>
				 
				   <view class="top-bar-right" @tap="backto(1)">
					   <text class="hrefto">取消</text>
				   </view>
		    </view>
			<view class="mainlist" >
				<view class="title" v-if="userSearchLists.length!=0">用户</view>
				<view class="title" v-else>暂无相关用户</view>
				<view class="list" v-for="(item,index) in userSearchLists"  :key="index">
					<img :src="item.imgurl" alt="" @tap="getUserProfile('item.id')">
					<text class="name" v-html="item.username"></text>
					<view class="button send" v-if="item.type=='1'">
						发消息
					</view>
					<view class="button add" v-else-if="item.type=='0'">
						加好友
					</view>

				</view>
			</view>
			<view class="mainlist" >
				<view class="title" v-if="groupSearchLists.length!=0">群组</view>
				<view class="title" v-else>暂无相关群组</view>
				<view class="list" v-for="(item,index) in groupSearchLists"  :key="index">
					<img :src="item.imgurl" alt="">
					<text class="name" v-html="item.groupname"></text>
					<view class="button send" v-if="item.type=='1'">
						进入群聊
					</view>
					<view class="button add" v-else-if="item.type=='0'">
						申请加入
					</view>
			
				</view>
			</view>
	</view>
</template>

<script>
	import Pubmain from '../../js/main.js';
	import staticdata from '../../mydoc/staticdata.js';
	export default {
		data() {
			return {
				keyvalue:'周',
				groupSearchLists:[],
				userSearchLists:[],
			};
		},
		methods:{
			backto:function(i){
				Pubmain.backto(i);
			},
			getUserProfile:function(usernumber){
				uni.navigateTo({
					url: 'test?id=1&name=uniapp'
				});
			},
			
			search:function(){
				console.log(this.keyvalue);
				this.getUserSearchLists(this.keyvalue);
				this.getGroupSearchLists(this.keyvalue);
				// console.log(this.userSearchLists);
			},
			getUserSearchLists:function(key){ 
				//根据值获取用户列表
				this.userSearchLists = staticdata.userSearchLists();
				// console.log(this.userSearchLists);
				let reg = eval('/'+key+'/g');
				// console.log(this);
				this.userSearchLists.forEach(function(list){
					// console.log(list);
					list.imgurl = '/static/protrait/'+list.imgurl; 
					list.username=list.username.replace(reg,"<span style='color:#4AAAFF;'>" + key + "</span>");
					// console.log(this);
					this.isFriend(list);
					
					// console.log(this.userSearchLists);
					// list.name = 
				},this)
				
			},
			isFriend:function(list){
				let  friendList = staticdata.myFriendLists();
				friendList.forEach(function(fl){
					
					if(list.id == fl.userid){
						list.type = fl.type;
					}
				})
				
			},
			getGroupSearchLists:function(key){
				//根据值获取群聊列表
				this.groupSearchLists = staticdata.groupSearchLists();
				let reg = eval('/'+key+'/g');
				this.groupSearchLists.forEach(function(list){
					list.imgurl = '/static/protrait/'+list.imgurl;
					this.isjoinGroup(list);
					list.groupname=list.groupname.replace(reg,"<span style='color:#4AAAFF;'>" + key + "</span>");
					// console.log(this.userSearchLists);
				},this)
			},
			isjoinGroup:function(list){
				let  groupList = staticdata.myGroupLists();
				groupList.forEach(function(fl){
					if(list.id == fl.groupid){
						list.type==fl.type;
					}
				})
			}
		}
		
	}
</script>

<style lang="scss">
	@import "../../mydoc/scss/public.scss";
	.content {
		margin-top: 120rpx;
		text-align: center;
		height: 400upx;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;

	}

	.top-bar{
		height: 88rpx;
		top: 0rpx;
		background: $uni-bg-color;
		padding-bottom: $uni-spacing-col-base;
		background: white;
		border-bottom: 2rpx solid rgba(39,40,50,0.08);
	}
	.top-bar-left{
		height: 68rpx;
		width: 10rpx;
		flex:1;
		position: relative;
	}
	.top-bar-left input{
		width: 100%;
		height: 100%;
		padding-left: 20rpx;
		border-radius: 16rpx;
		background: #C8C7CC;
	}
	.top-bar-left .search{
		position: absolute;
		right: 0;
		top: 20rpx;
		height: 40rpx;
		width: 40rpx;
	}
	.top-bar-right{
		 width: 100rpx;
		 height: 40rpx;
		 color: $uni-text-color-grey;
	} 
	
	
	
	.mainlist{
		min-height: 100rpx;
		width: 90%;
		height: auto;
		 
		margin: 40rpx auto;
		
	}
	.title{
		margin-bottom: 20rpx;
		height: 60rpx;
		font-size: 44rpx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		color: #272832;
		line-height: 60rpx;
		letter-spacing: -2rpx;

	}
	.list{
		width: 100%;
		
		height: 100rpx;
		align-items: center;
		justify-content: space-between;
		display: flex;
	}
	.list .name{
		min-width: 150rpx;
		text-align: left;
		margin-left:32rpx ;	
		flex: 1;
		height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #272832;
		line-height: 50rpx;
		letter-spacing: -2rpx;

	}
	.list .button{
		width: 120rpx;
		height: 48rpx;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: center;
		line-height: 48rpx;
		letter-spacing: 0rpx;
		border-radius: 24rpx;
	}
	.send{
		background: #ffe431;
		color: #272832;
	}
	.add{
		background: rgba(74,170,255,0.1);
		color: #4aaaff; 
	}
	
// 	.list .button text{
// 		width:70rpx;
// 		height: 48rpx;
// 		
// 
// 	}
	.list img{
		border-radius: 20rpx;
		width: 80rpx;	
		height: 80rpx;	
		
	}
</style>
