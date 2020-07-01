<template>
	<view class="content">
		<view class="top-bar">
				   <view class="top-bar-left">
					  <text class="hrefto">忘记密码？</text>
				   </view>
				 
				   <view class="top-bar-right" @tap="pageTurnTo('register')">
					   <text class="hrefto">注册</text>
				   </view>
		</view>
		
		<view class="container">
			<view class="logo">
				<img src="/static/login/logo.png" alt="">
			</view>
			<view class="logintitle">
				<text class="title">登录</text>
				<text class="news">您好,欢迎来到erke!</text>
			</view>
			<view class="loginform">
				<text class="toptips" >{{warning}}</text>
				<view class="inputcontainer">
					<input type="text" name="account" id="account" placeholder="text your account!" @input="usernameCheckInTime"  @blur="usernameCheckEndTime"  @focus="reinput('username')">
					<text class="tips" v-show="username.Verification==false">{{username.warning}}</text>
				</view>
				
				<view class="inputcontainer">
					<input :type="password.type" name="password" id="password" placeholder="text your password!" @input="passwordCheckInTime"  @blur="passwordCheckEndTime"  @focus="reinput('password')">
					<text class="tips" v-show="password.Verification === false">{{password.warning}}</text>
					<view class="checked" @tap="passwordDisplaySwitch()">
						<img :src="password.imgUrl" alt="">
					</view>
				</view>
				
				
				
			</view>
			<view :class='[{submitbutton:loginVerification},{lockedbutton:!loginVerification}]' @tap="login()">
				登录
			</view>
		</view>
		
	</view>
</template>

<script>
	import main from '../../mydoc/main.js';
	export default {
		data() {
			return {
				test:false,
				loginVerification:false,
				password:{
					type:'password',
					value:'',
					isDisplay:false,
					Verification:'readyfalse', //'reasdyfalse'; false;true
					warning:'',//1.密码格式错误，2.请输入密码
					imgUrl: '../../static/register/closeeye.png',
				},
				username:{
					value:'',
					Verification:'readyfalse', //'reasdyfalse'; false;true
					warning:'',//1.请输入账号，2.账号格式错误
				},
				warning:'',
				
			};
		},
		methods:{
			//页面跳转
			pageTurnTo: function(page){
				if(page == "register"){
					uni.navigateTo({
						url:'../register/register'
					})
				}
			},
			//密码显示隐藏
			passwordDisplaySwitch: function(){
				 
				if (this.password.isDisplay){
					this.password.type = "password";
					this.password.imgUrl = '../../static/register/closeeye.png';
				}else{
					this.password.type = "text";
					this.password.imgUrl = '../../static/register/openeye.png';
				}
				this.password.isDisplay = !this.password.isDisplay;
				// console.log(this.password.isDisplay);
			},
			//后台链接测试
			testFun: function(){
				uni.request({
					url: 'http: //192.168.0.3:3000/test' ,
					data:{
					},
					method: 'GET' ,
					success:(data) => {
						console.log(data);
					}
				})
			},
			usernameIsExist:function(){
				let username = e.detail.value;
				
				if(username.trim().length==0){
					this.username.warning='';
				}
			},
			usernameCheckInTime:function(e){
				let re = main.userNameCheck(e.detail.value);
				if(re == true ){
					if(this.password.Verification == true) 
						this.loginVerification=true;
					this.username.value=e.detail.value;
					this.username.Verification=true;
				}else{
					this.username.warning = re;
					this.username.Verification = 'readyfalse';
				}
			},
			usernameCheckEndTime: function(e){
				
				if(this.username.Verification == 'readyfalse'){
						this.username.Verification = false;
				}
				   
							 
			},
			passwordCheckInTime: function(e){
				let re = main.passwordCheck(e.detail.value);
				if(re == true ){
					if(this.username.Verification)
						this.loginVerification=true;
					this.password.value=e.detail.value;
					this.password.Verification=true;
				}else{
					 this.password.warning =re;
					 this.password.Verification = 'readyfalse';
				}
			},
			passwordCheckEndTime: function(e){
				// this.inputCheck();
// 				let re = main.passwordCheck(e.detail.value);
// 				if(re == true){
// 					//this.usernameIsExist();
// 					// this.login();
// 					this.password.value=e.detail.value;
// 					this.password.Verification=true;
// 				}else{
// 					this.password.Verification = false;
// 					this.password.warning =re;
// 					this.loginVerification= false;
// 				}
 
				 if(this.password.Verification == 'readyfalse'){
					let re = main.passwordCheck(e.detail.value);
					if(re != true)
						this.password.Verification = false;
					else{
						if(this.username.Verification)
							this.loginVerification=true;
						this.password.value=e.detail.value;
						this.password.Verification=true;
					}
				 }
// 				if(this.password.Verification == 'readyfalse')
// 				    this.password.Verification = false;
				 
			},
			usernameIsInput:function(){
				console.log(this.username.Verification);
				this.username.warning = this.username.warning ==''?'请输入用户名!': this.username.warning;
				if(this.username.Verification == 'readyfalse'){
					console.log('用户名未输入');
					this.username.Verification = false;
				}
			},
			passwordIsInput:function(){
				console.log(this.password.Verification);
				this.password.warning = this.password.warning == '' ?'请输入密码!' :this.password.warning;
				if(this.password.Verification  == 'readyfalse'){
					// this.password.Verification = false;
					this.password.Verification = false;
					
					console.log(this.password.warning);
				}
			},
			inputCheck:function(ty){
				if(ty == 'all'){
					this.usernameIsInput();
					this.passwordIsInput();
				}else if(ty == 'username'){
					this.usernameIsInput();
				}else if(ty == 'password'){
					this.passwordIsInput();
				}else{
					this.loginVerification = true;
				}
			},
			reinput:function(ty){
				this.warning='';
				 
				if(ty == 'username'){
					this.username.warning= '';
					if(this.username.Verification != true)
						this.username.Verification = 'readyfalse';
				}else{
					this.password.warning= '';
					if(this.password.Verification != true)
						this.password.Verification = 'readyfalse';
				}
			},
			login:function(){
				this.inputCheck('all');
				
				if(this.loginVerification){
// 					uni.request({
// 						url: 'http: //192.168.0.3:3000/test' ,
// 						data:{
// 						},
// 						method: 'GET' ,
// 						success:(data) => {
// 							console.log(data);
// 						}
// 					})
					this.warning = '用户名或密码错误！';

				}
				
			},
			clearInput:function(type){
				
			}

		}
	}
</script>

<style lang="scss">
	@import "../../mydoc/scss/public.scss";
	.content {
		text-align: center;
		height: 400upx;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;

	}
 
	/* top-bar  begin */
	 
    .top-bar{
		 top: 0rpx;
		background: $uni-bg-color;
		 
		background: white;
	}
	.top-bar-left{
		height: 68rpx;
		
	}
	.hrefto{
		
		width: 72rpx;
		height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		text-align: left;
		color: #333333;
		line-height: 50rpx;
	}
	 
	.top-bar-center{
		padding-top: 16rpx;
		
		width: 88rpx;
		height: 42rpx;
		/* margin-left: 232rpx; */
	}
 
	.top-bar-right{
		padding-top: 12rpx;
		margin-right:56rpx;
		width: 88rpx;
		height:50rpx;	
		 
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
		height:340rpx ;
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
		height:64rpx;
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
	.lockedbutton{
		line-height:96rpx;
		color: white;
		margin-top: 118rpx;
		width: 520rpx;
		height:96rpx;
		background: rgba(39,40,50,0.2);
		border-radius:48rpx;
		 
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
</style>
