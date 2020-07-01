<template>
	<view>
		<view class="top-bar">
				   <view class="top-bar-left">
					  <input type="text">
				   </view>
				  <view class="top-bar-center">
				 					  <input type="text">
				 </view>
				   <view class="top-bar-right" @tap="pageTurnTo('register')">
					   <text class="hrefto">取消</text>
				   </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.top-bar{
		 /* 解决自定义导航栏手机顶部状态栏区域会被页面内容覆盖 */
		/* box-sizing: border-box; */
		padding-top: var(--status-bar-height);
		position: fixed;
		height: 200rpx;
		width: 100%;
		background: ghostwhite;
		display: flex;
		align-items: center;
		justify-content:space-around;
		flex-wrap: nowrap;
		z-index: 1;
		
	}
	.top-bar-left{
		margin-left: 32rpx;
		padding-top: 12rpx;
		flex: 1;
		background: #007AFF;
	}
	.top-bar-center{
		padding-top: 16rpx;
		background: #4CD964;
		width: 88rpx;
		height: 42rpx;
		/* margin-left: 232rpx; */
	}
	.top-bar-right{
		background: #DD524D;
		padding-top: 12rpx;
		margin-right:56rpx;
	} 
</style>
