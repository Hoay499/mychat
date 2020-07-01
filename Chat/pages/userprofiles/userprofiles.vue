<template>
	<view class="content"> 
			<view class="bg">
				<image  src="/static/protrait/erke.jpg" mode="aspectFill"></image>
				<view class="bgmask"></view>
			</view>
			
			<view class="top-bar">
				   <view class="top-bar-left">
						<img src="/static/register/backleft.png" alt=""> 
				   </view>
				 
				   <view class="top-bar-right" @tap="backto(1)">
					   <img src="/static/userprofiles/more.png" alt=""> 
				   </view>
		    </view>
			 
			<view class="mainbackground" >
				<view class="main">
					<view :class="[{ci:friendApplyIsDisplay,profiles:friendApplyIsDisplay},{bci:!friendApplyIsDisplay,profiles:!friendApplyIsDisplay}] " id="profiles" :animation="animationData2">
						<img src="/static/protrait/erke.jpg" :class="[{ci:friendApplyIsDisplay},{bci:!friendApplyIsDisplay}] " alt="">
						<view class="gender" :style="{display: friendApplyIsDisplay? 'none':'block'}">
							<img src="/static/userprofiles/female.png" alt="">
						</view>
					</view>
					<text class="username">邓紫棋</text>
					<text class="nickname">昵称:老婆</text>
					<text class="thoughts">有道翻译提供即时免费的中文、英语、日语、韩语、法语、德语、俄语、西班牙语、葡萄牙语、越南语、印尼语、意大利语全文翻译、网页翻译、文档翻译服务。</text>
				</view>
			</view>
			<view class="addapply"  @tap="addfreind">加为好友</view>
			
			
			<view class="Friendapply" :animation="animationData">
				<view class="username">邓紫棋</view>
				<view class="applycontent">
					<textarea value="不是英bai雄        不读三国
						
						若是英雄    怎么能不懂寂寞
						
						独自走下长坂坡du     月光太温柔
						
						曹操不唆    一心要拿荆州
						
						用阴谋阳谋    明说暗夺的摸
						
						东汉末年分三国      烽火连天不休
						
						儿女情长     被乱世左右
						
						谁来煮酒     尔虞我诈是三国
						
						说不清对与错
						
						纷纷扰扰     千百年以后
						
						一切又从头 oh
						
						不是英雄     不读三国
						
						若是英雄     怎么能不懂寂寞" placeholder="" auto-height="400rpx" max-width="560rpx" />
				</view>
				<view class="addapplycancel bt" @tap="addfreind">取消</view>
				<view class="addapplysend bt">发送</view>
			</view>
	</view>
</template>

<script>
	import Pubmain from '../../js/main.js';
	import staticdata from '../../mydoc/staticdata.js';
	export default {
		data() {
			return {
				friendApplyIsDisplay:false,
				animationData:{},
				animationData2:{}
				
			};
		},
		methods:{
			//动画效果
			addfreind:function(){
				// let query = uni.createSelectorQuery();
				// const profiles = query.select('#profiles');
				
				// const profiles = query.select('#profiles');
				// console.log(profiles);
				let animation = uni.createAnimation({
					duration:1000,
					timingFunction:'ease-out',
				})
				let animation2 = uni.createAnimation({
					duration:1000,
					timingFunction:'ease-out'
					
				})
				// console.log(animation2)
				if(!this.friendApplyIsDisplay){
					animation2.width(120).height(120).step();
					// animation2.border-radius(50).step();
					animation.bottom(0).step();
				}	
				else{
					animation.bottom(-550).step();
				}
					
				this.animationData=animation.export();
				this.animationData2= animation2.export();
				this.friendApplyIsDisplay = !this.friendApplyIsDisplay;
			}
		}		
	}
</script>

<style lang="scss">
@import "../../mydoc/scss/public.scss";
	.content {
		margin-top: 120rpx;
		text-align: center;
		height: 100%;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;
		position: relative;
		overflow: hidden;
	}
	body{
		height: 100%;
	}

	.top-bar{
		height: 88rpx;
		top: 0rpx;
			
	
	}
	.bg{
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -2;
		top: 0px;
	}
	.bg image{
		opacity: 0.6;
		filter: blur(14px);
		width: 100%;
		height: 100%;
	}
	.bgmask{
		width: 100%;
		height: 100%;
		background: rgba(255,255,255,0.8);
		z-index: -1;
	}
	.top-bar-left{
		// background: red;
		height: 48rpx;
		width: 32rpx;
		margin-left: -150rpx;
	}
	.top-bar-right{
		margin-top: -64rpx;
		 // background: #007AFF;
		 width: 52rpx;
		 height: 12rpx;
		 margin-right: -150rpx;
	} 
	.mainbackground{
		width: 100%;
		height: 1000rpx;
		
	}
	.profiles{
		margin-top: 60rpx;
		width: 400rpx;
		height:400rpx;
		border: 6rpx solid #ffffff;
		border-radius: 48rpx;
		position: relative;
		z-index: 9;
	}
	.ci{
		animation: ci;
		animation-duration: 2s;
		animation-fill-mode: forwards;
		transition-timing-function: ease-out;
	}
	.bci{
		animation: bci;
		animation-duration: 2s;
		animation-fill-mode: forwards;
		transition-timing-function: ease-out;
	}
	.profiles img{
		border-radius: 48rpx;
	}
	.gender{
		// display: flex;
		padding: 12rpx;
		box-sizing: border-box;
		width: 64rpx;
		height: 64rpx;
		right: 16rpx;
		bottom: 16rpx;
		background: #ff5d5b;
		border-radius: 50%;
		position: absolute;
// 		align-items: center;
// 		justify-content: center;
	}
	.main{
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content:space-evenly ;
		min-height: 100rpx;
		width: 100%;
		height: 100%;
		// background: rgba(255,255,255,0.6);
		margin: 40rpx auto;
		
	}
	.username{
		margin-top: 48rpx;
		max-width: 300rpx;
		height: 74rpx;
		font-size: 46rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #272832;
		line-height: 74rpx;
		letter-spacing: -2rpx;
	}
	.nickname{
		max-width: 200rpx;
		height: 40rpx;
		font-size: 28rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #272832;
		line-height:40rpx;
		letter-spacing: 0rpx;
	 }
	 .thoughts{
		margin-top: 20rpx;
		width: 600rpx;
		height: 170rpx;
		font-size: 28rpx;
		font-family: PingFangSC, PingFangSC-Light;
		font-weight: 300;
		text-align: left;
		color: #272832;
		line-height: 48rpx;
		letter-spacing: 0rpx;
	}
	.addapply{
		width: 684rpx;
		height: 80rpx;
		background: #ffe431;
		border-radius: 10rpx;
		text-align: center;
		line-height: 80rpx;
		 margin: 0 auto;
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		color: #272832;
		letter-spacing: -1rpx;
	}
	
	
	
	
	
	
		.Friendapply{
			box-sizing: border-box;
			width:750rpx;
			height: 1100rpx;
			background: #ffffff;
			border-radius: 40rpx 40rpx 0rpx 0rpx;
			position: absolute;
			bottom: -1100rpx;
			padding-left: 60rpx;
		}
		.Friendapply .username{
			margin-top: 164rpx;
		}
		.applycontent{
			box-sizing: border-box;
			padding: 40rpx;
			margin-left: -16rpx;
			margin-top: 40rpx;
			width: 638rpx;
			height: 720rpx;
			background: #f3f4f6;
			border-radius: 20rpx;
			font-size:32rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #272832;
			line-height: 44rpx;
			letter-spacing: -2rpx;
		}
		.bt{
			height: 80rpx;
			background: #ffe431;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: center;
			color: #272832;
			line-height: 80rpx;
			letter-spacing: -2rpx;
			
		}
		.addapplycancel{
			width: 172rpx;
			bottom: 72rpx;
			left: 34rpx;
			background: rgba(39,40,50,0.1);
			position: absolute;
		}
		.addapplysend{
			width: 480rpx;
			position: absolute;
			bottom: 72rpx;
			right: 92rpx;
		}
		
		
		@keyframes hd{
			from{
				
			}
			50%{
				width: 240rpx;
				height: 240rpx;
			}
			to{
				transform: translateX(-100rpx);
				border-radius: 50%;
				box-shadow: 0pt 18pt 20pt 0pt rgba(39,40,50,0.1); 
			}
			
			
		}
		@keyframes bci{
			to{
				width: 400rpx;
				height:400rpx;
				border: 6rpx solid #ffffff;
				border-radius: 48rpx;
			}
		}
		@keyframes ci{
			to{
				// transform: translateX(-100rpx);
				width: 240rpx;
				height:240rpx;
				border-radius: 50%;
				box-shadow: 0rpx 36rpx 40rpx 0rpx rgba(39,40,50,0.1); 
			}
		}
</style>
