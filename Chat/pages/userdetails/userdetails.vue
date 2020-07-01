<template>
	<view class="content">
		<view class="mymodify" :animation="animationData">
			<modify :value="valueTransmission" @confirm="modifyConfirm" @cancel="modifyCancle"></modify>
		</view>
		<view class="top-bar">
		   <view class="top-bar-left">
				<img src="/static/register/backleft.png" alt=""> 
		   </view>
		   <view class="top-bar-center">
			   详情
		   </view>
		 
		    <view class="top-bar-right" >
			    
		   </view>  
		</view>
		
		<view class="main">
			<view class="part1">
				<view class="item height1">
					<span class="item-text">头像</span>
					<view class="item-profile">
						<image-cropper  :src="tempFilePath" @confirm="confirm" @cancel="cancel" ></image-cropper>
						
						<img :src="user.headPortrait" @tap="upload"/>
					 
					</view>
					<view class="item-turntoright"><img src="/static/userdetails/backright.png" alt=""></view>
				</view>
				<view class="item height2">
					<span class="item-text">签名</span>
					<view class="item-autograph singletextellipsis">{{user.thoughts}}</view>
					<view class="item-turntoright" @tap="modify('thoughts',user.thoughts,'签名')"><img src="/static/userdetails/backright.png" alt=""></view>
				</view>
				<view class="item height3">
					<span class="item-text">注册</span>
					<view class="item-autograph singletextellipsis">{{user.joinIn}}</view>
					
				</view>
			</view>
			<view class="part2">
				<view class="item height3">
					<span class="item-text">昵称</span>
					<view class="item-autograph singletextellipsis">{{user.nickName}}</view>
					<view class="item-turntoright" @tap="modify('nickName',user.nickName,'昵称')"><img src="/static/userdetails/backright.png" alt=""></view>
				</view>
				<view class="item height3">
					<span class="item-text">性别</span>
					<view class="item-autograph singletextellipsis">
						<!-- 普通选择器 -->
						<picker @change="bindPickerChange" :value="user.sex" :range="sex.array">
							<view class="uni-input">{{sex.array[user.sex]}}</view>
						</picker>
					</view>
					 
				</view>
				<view class="item height3">
					<span class="item-text">生日</span>
					<view class="item-autograph singletextellipsis">
						<picker mode="date" :value="user.birthDate" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{user.birthDate}}</view>
						</picker>
					</view>
					 
				</view>
				<view class="item height3">
					<span class="item-text">电话</span>
					<view class="item-autograph singletextellipsis">{{user.phone}}</view>
					<view class="item-turntoright" @tap="modify('phone',user.phone,'电话')"><img src="/static/userdetails/backright.png" alt=""></view>
				</view>
				<view class="item height3">
					<span class="item-text">邮箱</span>
					<view class="item-autograph singletextellipsis">{{user.email}}</view>
					<view class="item-turntoright" @tap="modify('email',user.email,'邮箱')"><img src="/static/userdetails/backright.png" alt=""></view>
				</view>
				<view class="item height3">
					<span class="item-text">修改密码</span>
				<!-- 	<view class="item-autograph singletextellipsis">{{user.password}}</view> -->
					<view class="item-turntoright" @tap="modify('password',user.password,'密码')"><img src="/static/userdetails/backright.png" alt=""></view>
				</view>
			</view>
			
		</view>
		
		<view class="bottom">
			<view class="logout">退出应用</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from '../../components/ling-imgcropper/ling-imgcropper.vue';
	import modify from '../modify/modify.vue';
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				user:{
					headPortrait:'/static/protrait/erke.jpg',
					thoughts:'邓紫棋啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
					joinIn:'2020-6-23 12:02:12',
					nickName:'二珂阿',
					birthDate:currentDate,
					sex:0,
					phone:'32435345432',
					email:'231452452135',
					password:'3243t2t4t4',
				},
				prop:'',
				confirmIsDisplay:false,
				animationData:{},
				sex: {
					array:['男', '女'],
					index:0,
				},
				valueTransmission:{
					value:'12',
					type:'12',
				}, 
				date: currentDate,
				cropFilePath:'/static/protrait/erke.jpg',
				tempFilePath:'',
				headimg:'',
			};
		},
		components:{
			ImageCropper,
			modify,
		},
		computed:{
			 
			startDate() {
				return this.getDate('start');
				
			},
			endDate() {
				return this.getDate('end');
			}
 
		},
		
		methods:{
			modifyCancle:function(){
				let animation = uni.createAnimation({
					duration:1000,
					timingFunction:'ease-out',
				})
				animation.left(1000).step();
				this.animationData=animation.export();
			    this.confirmIsDisplay = !this.confirmIsDisplay;
			},
			modifyConfirm:function(val){
				console.log(val.value);
				console.log(this.user);
				console.log(Object.keys(this.user));
				
				this.modifyCancle();
				this.user[this.prop] = val.value;
			},
			//动画效果
			modify:function(datatype,datacontent,datatitle){
				 
				this.valueTransmission.value=datacontent;
				this.valueTransmission.type=datatitle;
				this.prop = datatype;
				let animation = uni.createAnimation({
					duration:1000,
					timingFunction:'ease-out',
				})
				 
				// console.log(animation2)
				
					animation.left(0).step();
					 
				 
				
				this.animationData=animation.export();
				
				this.confirmIsDisplay = !this.confirmIsDisplay;
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.sex.index = e.target.value;
			},
			 bindTimeChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			 upload() {
                uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: (res) => {
						this.tempFilePath = res.tempFilePaths.shift()
					}
                });
            },
            confirm(e) {
				this.tempFilePath = '';
				this.cropFilePath = e.detail.tempFilePath;
				this.headimg=e.detail.tempFilePath;
				
				// #ifdef APP-PLUS||MP
				//除了H5端返回base64数据外，（APP-PLUS||MP就是APP和小程序就执行编译。）其他端都是返回临时地址，所以你要判断base64还是已上传文件名，
				//按我这里是先上传裁剪得来的临时文件地址然后得到已上传的文件名，
				//呆活你要判断是H5还是其他端传给后端类型参数让后端判断执行何种情况代码就OK了

                uni.uploadFile({
					url:'后端地址上传图片接口地址',
                    filePath: this.headimg,
					name: 'file',
					fileType:'image',
						//formData:{},传递参数
					 success: (uploadFileRes) => { 
						 var backstr= uploadFileRes.data;
						//自定义操作
					 },
					 complete() {
						//console.log("this is headimg"+this.headimg)   
					 },
					 fail(e) {
						console.log("this is errormes "+e.message)  
					 }

					 });

				// #endif
            },
            cancel() {
				console.log('canceled');
				this.tempFilePath="";
			},
			
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
		box-sizing: border-box;
		padding-left: 32rpx;
		padding-right: 26rpx;
		width:100%;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.item-text{
		width: 62rpx;
		height:44rpx;
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #272832;
		line-height: 44rpx;
		letter-spacing: -2rpx;
	} 
	
	.part1{
		border-bottom:4rpx  solid #eeeeee;
		box-shadow: 0rpx 2rpx 0rpx 0rpx #eeeeee; 
	}
	.item-autograph{
		width: 558rpx;
		height: 22pt;
		font-size: 16pt;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: rgba(39,40,50,0.6);
		line-height: 22pt;
		letter-spacing: -1pt;
	}
	.item-profile{
		width: 558rpx;
	}
	.item-profile img{
		width: 108rpx;
		height: 108rpx;
		
		border-radius: 20rpx;
	}
	.item-turntoright{
		width:18rpx;
		height:42rpx;
		
	 }
	.height1{
		height: 148rpx;
	}
	.height2{
		height: 124rpx;
	}
	.height3{
		height: 112rpx;
	}
	.bottom{
		width: 684rpx;
		left: 34rpx;
		position: absolute;
		bottom: 94rpx;
		height: 80rpx;
	}
	.logout{
		width: 684rpx;
		height:80rpx;
		border-radius: 10rpx;
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align:center;
		color: #ff5d5b;
		line-height: 80rpx;
		letter-spacing: -2rpx;
	}
	
.mymodify{
	position: absolute;
	z-index: 99999;
	height: 100%;
	width: 100%;
	background: white;
	left: 1700rpx;
}
</style>
