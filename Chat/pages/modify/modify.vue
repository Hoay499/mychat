<template>
	<view>
		<view class="top-bar">
		   <view class="top-bar-left" @tap="cancle" >
			   <text>取消</text>
		   </view>
		   <view class="top-bar-center">
			   <text class="text-title"> {{value.type}}修改</text>
		   </view>
		 
		    <view class="top-bar-right" @tap="confirm">
			    <text class="text-confirm">确定</text>
		   </view>  
		</view>
		{{value.value}}
		<view class="main">
			<textarea name="" id="" cols="30" rows="10" v-model="value.value" >
				 
			</textarea>
		</view>
	</view>
</template>

<script>
	export default {
		name:'modify',
		//属性
		props: {
			value: {
				type: Object,//属性类型
				default:function(e){
					return {};
				},
			},
		
		},
		data() {
			return {
				datatype:'',//password,text
				datacontent:'',
			};
		},
		//组件生命周期
		created:function(e){
		   
		},
		methods:{
			test:function(){
				// console.log(this.)
			},
			//获取页面高度
			getELementStyle: function(){
				const query = uni.createSelectorQuery().in(this);
				query.seLect('.modify').boundingClientRect(data => {
					this.widHeight = data.height;
				}).exec();
			},
			cancle:function(){
				this.$emit('cancel');
			},
			confirm:function(){ 
				 
				this.$emit('confirm',this.value);	
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
		margin-top: 140rpx;
		z-index: -1;
 
		height:500rpx;
		width:100%;
	}

	.top-bar-center{
		height: 48rpx;
		width: 554rpx;
		text-align: center;
	}
	.text-title{
		height:56rpx;
		font-size: 40rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #272832;
		line-height: 56rpx;
		letter-spacing: -2rpx;
	}
	.top-bar-left{
		// background: red;
		height: 48rpx;
		width: 100rpx;
		 
	}
	.text-confirm{
		height: 44rpx;
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #4aaaff;
		line-height: 44rpx;
		letter-spacing: -2rpx;
	}
	.top-bar-right{
		 // background: #007AFF;
		 width:100rpx;
		 height: 48rpx; 
	} 
	.text-cancle{
		height: 44rpx;
		font-size:32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #272832;
		line-height: 44rpx;
		letter-spacing: -2rpx;
	}
	.main{
		
	}
	.main textarea{
		width: 686rpx;
		height: 386rpx;
		background: #f3f4f6;
		border-radius: 20rpx;
		margin:0 auto;
		box-sizing: border-box;
		padding: 22rpx;

		 
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #272832;
		line-height: 50rpx;
		letter-spacing: 3rpx;
	}
</style>
