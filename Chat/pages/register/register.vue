<template>
	<view class="content">
		<view class="top-bar">
		   <view class="top-bar-left" @tap="pageTurnTo('login')">
			 <img src="/static/register/backleft.png" alt="">
		   </view>
		 
		   <view class="top-bar-right">
			 <img src="/static/register/close.png" alt="">
		   </view>
		</view>
		
		<view class="container">
			<view class="logo">
				<img src="/static/login/logo.png" alt="">
			</view>
			<view class="logintitle">
				<text class="title">注册</text> 
			</view>
			<view class="loginform">
				<view class="inputcontainer">
					<input type="text" name="name" id="name" placeholder="text your nickname!" @blur='userNameCheck'>
					<text class="tips" v-show="!username.isVerificationPassed">{{username.warning}}</text>
					<view class="checked" v-show="username.isVerificationPassed">
						<img :src="Verification.passedImgUrl" alt="">
					</view>
				</view>
				<view class="inputcontainer">
					<input type="text" name="email" id="email" placeholder="text your email!" @blur='emailCheck'>
					<text class="tips" v-show="!email.isVerificationPassed">{{email.warning}}</text>
					<view class="checked"  v-show="email.isVerificationPassed">
						<img :src="Verification.passedImgUrl" alt="">
					</view>
				</view>
				<view class="inputcontainer">
					<input :type="password[0].type" name="password" id="password" placeholder="text your password!" @blur="passwordCheck">
					<text class="tips" v-show="!password[0].isVerificationPassed">{{password[0].warning}}</text>
					<view class="checked" @tap="passwordDisplaySwitch(0)">
						<img :src="password[0].imgUrl" alt="">
					</view>
				</view>
				
				<view class="inputcontainer">
					<input :type="password[1].type" name="password" id="password" placeholder="retext your password!" @blur="repasswordCheck">
					<text class="tips" v-show="!password[1].isVerificationPassed">{{password[1].warning}}</text>
					<view class="checked" @tap="passwordDisplaySwitch(1)">
						<img :src="password[1].imgUrl" alt="">
					</view>
				</view>
				
			</view>
			<view  class='submitbutton'>
				注册
			</view>
		</view>
		
	</view>
</template>

<script>
	import main from '../../mydoc/main.js';
	import staticdata from '../../mydoc/staticdata.js';
	export default {
		data() {
			return {
				Verification:{
					passedImgUrl:'../../static/register/checked.png',
					unpassedImgUrl:'',
				},
				password:[{
					value:'',
					type: 'password',
					isDisplay: false,
					isVerificationPassed:false,
					imgUrl: '../../static/register/closeeye.png',
					warning: '',//1.请输入以字母开头；仅包括-_!6-13位密码，2.请输入密码!，3.两次密码不相同！
				},{
					value:'',
					type:'password',
					isDisplay: false,
					isVerificationPassed:false,
					imgUrl: '../../static/register/closeeye.png',
					warning: '',//1.两次密码不相同，2.请再次输入密码
				}],
				username:{
					value:'',
					isVerificationPassed:false,
					warning: '',//1.用户名格式不正确，2.请输入用户名!，3.用户名已存在！
				},
				email:{
					value:'',
					isVerificationPassed:false,
					warning:'',//1.邮箱格式不正确，2.请输入邮箱!，3.邮箱已注册
				}
			}
		},
		methods:{
			//页面跳转
			pageTurnTo: function(page){
				if(page == "login"){
// 					uni.navigateTo({
// 						url:'../register/register'
// 					})
					uni.navigateBack({
						data:1   //返回上一级页面
					});
				}
				
			},
			//密码显示隐藏
			passwordDisplaySwitch: function(flag){
				console.log(flag);
				console.log(this.password[flag].isDisplay);
				if (this.password[flag].isDisplay){
					this.password[flag].type = "password";
					this.password[flag].imgUrl = '../../static/register/closeeye.png';
				}else{
					this.password[flag].type = "text";
					this.password[flag].imgUrl = '../../static/register/openeye.png';
				}
				this.password[flag].isDisplay = !this.password[flag].isDisplay;
			},
			emailCheck:function(e){
				let result = main.emailCheck(e.detail.value);	
				if(result == true){
					console.log('邮箱格式验证通过!');
					this.email.value=e.detail.value;
					let r2 = this.emailIsExist();
					if(r2==false){
						console.log('邮箱未注册!');
						this.email.isVerificationPassed = true;
						this.email.warning = '';
					}else{
						console.log('邮箱已注册!');
						this.email.isVerificationPassed = false;
						this.email.warning = r2;
					}
				}else{
					console.log('邮箱格式错误!');
					this.email.isVerificationPassed = false;
					console.log(result);
					this.email.warning = result;
				}
			},
			emailIsExist:function(email){
				if(staticdata.emailIsExist(email)){
					return '邮箱已注册!';
					this.email.isVerificationPassed =false;
					this.email.warning = '邮箱已注册!';
				}else{
					return false;
					this.email.isVerificationPassed =true;
					this.email.value=email;
				}
			},
			userNameCheck:function(e){
				let result = main.userNameCheck(e.detail.value);	
				if(result == true){
					this.username.value=e.detail.value;
					let r2 = this.userNameIsExist();
					console.log('用户名格式验证通过!');
					if(r2==false){
						console.log('该用户名未使用');
						this.username.isVerificationPassed = true;
						this.username.warning = '';
					}else{
						console.log('该用户名已使用');
						this.username.isVerificationPassed = false;
						this.username.warning = r2;
					}
				}else{
					console.log('用户名格式验证失败!');
					this.username.isVerificationPassed =false;
					this.username.warning = result;
				}
			},
			userNameIsExist:function(username){
				if(staticdata.usernameIsExist(username)){
					return '用户名已存在!';
				}else{
					return false;
				}
			},
			passwordCheck:function(e){
				let result = main.passwordCheck(e.detail.value);	
				if(result == true){
					this.password[0].value=e.detail.value;
					
					this.password[0].isVerificationPassed = true;
					this.password[0].warning ='';
				}else{
					this.password[0].isVerificationPassed =false;
					this.password[0].warning = result;
				}
			},
			repasswordCheck:function(e){
				if(this.password[0].value === e.detail.value){
					this.password[1].isVerificationPassed =true;
					this.password[1].warning = '';
				}else{
					this.password[1].isVerificationPassed = false;
					this.password[1].warning = '两次密码不一致!';
				}
			}
			
		}
		
	}
</script>

<style lang="scss">
	@import  "../../mydoc/scss/public.scss";
	.content {
		text-align: center;
		height: 400upx;
		
		
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;

	}
	 
	/* top-bar  begin */
	 
    .top-bar{
		top: 16rpx;
		 /* 解决自定义导航栏手机顶部状态栏区域会被页面内容覆盖 */
		/* box-sizing: border-box; */
		padding-top: var(--status-bar-height);
		background: $uni-bg-color;
		background: white;
	}
	.top-bar-left{
		width: 34rpx;
		height: 44rpx;
		 
	}
	 
	/* top-bar  ---end */
	.container{
		margin-top:88rpx;
		margin-left: 56rpx;
		display: flex;
		flex-direction: column;
		width: 636rpx;
	
		align-items: center;
	}
	.logo{
		margin-top:80rpx;
		width: 194rpx;
		height: 92rpx;
	}
	.logintitle{
		width: 634rpx;
		margin-top: 54rpx;
		text-align: left;
	}
	.title{
	
		height:80rpx;
		font-size: 56rpx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		
		color: #272832;
		line-height: 80rpx;
	}
	.news{
		margin-top: 14rpx;
		
		display: block;
		height: 56rpx;
		font-size: 40rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		
		color: rgba(39,40,50,0.5);
		line-height: 56rpx;
	}
	.loginform{
		margin-top: 68rpx;
		height:430rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 36rpx;
		font-family: AvenirNext, AvenirNext-Medium;
		font-weight: 500;
		text-align: left;
		color: #272832;
		line-height: 50rpx;
	}
	.inputcontainer{
		width: 636rpx;
		height:66rpx;
		border-bottom: 2rpx solid rgba(39,40,50,0.08);
		position: relative;
		
	}
	.inputcontainer input {
		position: absolute;
		left: 2rpx;
		border: 0rpx;
		width: 118pt;
	}
	.tips{ 
		height:56rpx;
		font-size:$uni-font-size-lg;
		color: $uni-color-warning;
		line-height: 56rpx;
		position: absolute;
		left: 2rpx;
		bottom: -56rpx;
	}
	.checked{
		height:30rpx;
		width:40rpx;
		position: absolute;
		right: 2rpx;
		 
	}
	.submitbutton{
		line-height:96rpx;
		color: white;
		margin-top: 118rpx;
		width: 520rpx;
		height:96rpx;
		background: #ffe431;
		border-radius:48rpx;
		box-shadow: 0rpx 50rpx 32rpx -36rpx rgba(255,228,49,0.4); 
	}
	.register{
			line-height:96rpx;
			color: white;
			margin-top: 118rpx;
			width: 520rpx;
			height:96rpx;
			background: rgba(39,40,50,0.2);
			border-radius:48rpx; 
		}
</style>
