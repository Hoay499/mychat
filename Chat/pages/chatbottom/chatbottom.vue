<template>
	<view>
		<view class="bottom">
			<view class="bottom-top">
				<view @tap="audioSwitch">
					<img src="/static/chat/voice.png" alt="" class="voice" v-if="isrecord" >
					<FontAwesome type="fas fa-camera" size="30" fw v-else></FontAwesome>
				</view>
				<textarea name="" id="" cols="30" rows="10" auto-height="" @input="inputs" @focus="keyboardSwitch" v-model="msg" v-if="!isrecord" ></textarea>
				<view class='sayit' v-else>按住说话</view>
				<img src="/static/chat/expression.png" alt="" class="expression" @tap="emojiSwitch">
				<img src="/static/chat/add.png" alt="" class="add" @tap="elseSwitch" v-show="!issend">
				<view class="send" :animation="animationdata" v-show="issend" @tap="msgsend">发送</view>
			</view>
			<view class="bottom-hidden" v-show="isemoji">
			   <emoji @emotion="selectEmotion"></emoji>
			</view>
			<view class="bottom-hidden" v-show="iskeyboard">
				
				<view class="line">
					<view class="elseitem">
						a
					</view>
					<view class="elseitem">
						b
					</view>
					<view class="elseitem">
						c
					</view>
					
				</view>
				<view class="line">
					<view class="elseitem">
						d
					</view>
					<view class="elseitem">
						e
					</view>
					<view class="elseitem2" >
						 
					</view>
				</view>
				
			</view>
			<view class="bottom-hidden" v-show="iselse">
				<view class="line">
					<view class="elseitem" @tap="sendImg('album')">
						<FontAwesome type="fas fa-camera" size="30" fw></FontAwesome> 
						图片
					</view>
					<view class="elseitem" @tap="sendImg('camera')">
						<FontAwesome type="fas fa-camera" size="30" fw></FontAwesome> 
						 拍照
					</view>
					<view class="elseitem">
						<FontAwesome type="fas fa-camera" size="30" fw></FontAwesome> 
					</view>
					
				</view>
				<view class="line">
					<view class="elseitem">
						<FontAwesome type="fas fa-camera" size="30" fw></FontAwesome> 
					</view>
					<view class="elseitem">
						<FontAwesome type="fas fa-camera" size="30" fw></FontAwesome>  
					</view>
					<view class="elseitem2" >
						 
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import FontAwesome from '@/components/FontAwesome/index.vue';
	import emoji from '@/components/Emotion/index.vue';
	export default {
		data() {
			return {
				issend:false,
				iselse:false,
				iskeyboard:false,
				isrecord:false,
				isemoji:false,
				animationdata:{},
				msg:'',
			};
		},
		components:{
			FontAwesome,
			emoji,
		},
		
		methods:{
			audioSwitch:function(){
			    this.isrecord = !this.isrecord;
				if(this.iskeyboard)
					this.iskeyboard = !this.iskeyboard;
				if(this.iselse)
					this.iselse = !this.iselse;
			     if(this.isemoji)
					this.isemoji = !this.isemoji;
			},
			elseSwitch:function(){
				 if(this.isrecord)
					this.isrecord = !this.isrecord;
				 if(this.iskeyboard)
				 	this.iskeyboard = !this.iskeyboard;
				 if(this.isemoji)
					this.isemoji = !this.isemoji;
				this.iselse = !this.iselse;
			},
			emojiSwitch:function(){
				 if(this.isrecord)
				 	this.isrecord = !this.isrecord;
				if(this.iskeyboard)
					this.iskeyboard = !this.iskeyboard;
				if(this.iselse)
					this.iselse = !this.iselse;
				this.isemoji = !this.isemoji;
			},
			keyboardSwitch:function(){
				if(this.isrecord)
					this.isrecord = !this.isrecord;
				if(this.isemoji)
					this.isemoji = !this.isemoji;
				if(this.iselse)
					this.iselse = !this.iselse;
				this.iskeyboard =!this.iskeyboard;
			},
			inputs:function(e){
				let value = e.detail.value;
				console.log(e);
				console.log(value);
				if(!value){
					// this.displaysend(false);
					this.issend = false;
				}else{
					this.issend = true;
					// this.displaysend(true);
					
				}
				 
			},
		
			displaysend:function(flag){
				console.log(flag);
// 				let animation = uni.createAnimation({
// 					duration:1000,
// 					timingFunction:'ease-out',
// 				})
// 				if(flag){
// 					animation.width(0).step();
// 				}else{
// 					animation.width(100).step();
// 				}
// 				
				this.animationData=animation.export();
			},
			//图片发送
			sendImg: function(e){
					let count = 9;
					if(e == 'album'){
						count = 9;
					}else{
						count = 1;
					}
					uni.chooseImage({ 
						count: count, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压
						sourceType: [e], //从相册选择
						success: (res) => {
							console.log(typeof res.tempFilePaths);
							console.log(res.tempFilePaths);
							res.tempFilePaths.forEach(function(item){
								this.sendmsg(item,1);
							},this)
							console.log(JSON.stringify(res.tempFilePaths));
						}
					});
			},
			sendmsg:function(msg,type){
				let data = {
					msg:msg,
					type:type,
				};
				 this.$emit('msg',data);
				
			},
			msgsend: function(){
				sendmsg(this.msg,0);
				setTimeout(()=>{
					this.msg='';
				},0)
			},
			emoji(res) {
				let word = res.replace(/\#|\;/gi, '')
				const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷',
					'冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰',
					'骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜',
					'菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫',
					'便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳',
					'发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'
				]
				let index = list.indexOf(word)
				return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
			},
		   selectEmotion:function(e){
			   
			   
			    this.msg += e;
				// msgsend();
			},
			 
		}
	}
</script>

<style lang="scss">
    // @import  "../../static/font-awesome-4.7.0/scss/font-awesome.scss";
	.bottom{
		display: flex;
		align-items: center;
		// box-shadow: 5rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.25) ; 
		background: #ecedee;
	    margin: 0 auto;
		padding-bottom: $uni-spacing-col-base;
		position: fixed;
		bottom: 0rpx;
		width: 100%; 
		background:rgba(250,250,250,0.9);
		box-shadow: 0rpx 2rpx 0rpx 0rpx rgba(0,0,0,0.25) inset; 
		height: auto;
		flex-wrap: wrap;
		
	}
	.bottom-top{
		display: flex;
		align-items: center;
		// box-shadow: 5rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.25) ; 
		padding: 14rpx 0rpx;
		margin:0 auto;
		height: 70rpx;
	}
	.bottom-hidden{
		width: 750rpx;
		height: 436rpx;
		background: #ecedee;
		box-shadow: 0rpx 0rpx 0rpx 0rpx rgba(0,0,0,0.1); 
		display: flex;
		align-content: space-between;
		padding: 54rpx 52rpx;
		box-sizing: border-box;
		flex-wrap: wrap;

	}
	.voice{
		width: 56rpx;
		height: 56rpx;
	}
	textarea{
		background: #ffffff;
		margin-left:20rpx ;
		margin-right:20rpx ;
		width: 454rpx;
		height: 82rpx;
	}
	.sayit{
		background: #ffffff;
		margin-left:20rpx ;
		margin-right:20rpx ;
		width: 454rpx;
		height: 82rpx;
		
		color: #333333;
		font-size: 40rpx;
		line-height: 82rpx;
		text-align: center;
	}
	.expression{
		width: 56rpx;
		height: 56rpx;
	}
	.add{
		margin-left: 24rpx;
		width: 56rpx;
		height: 56rpx; 
	}
	.line{
		width: 1400rpx;
		height: 200rpx;
		display: flex;
		justify-content: space-between;
		
	}
	.elseitem2{
		width: 120rpx;
		height: 120rpx;
		background: rgba(250,250,250,0);
		border-radius: 24rpx;
		box-sizing: border-box;
		padding: 38rpx 34rpx;
		
	}
	.elseitem{
		width: 120rpx;
		height: 120rpx;
		background: #ffffff;
		border-radius: 24rpx;
		box-sizing: border-box;
		padding: 38rpx 34rpx;
		
	}
	.send{
		margin-left: 24rpx;
		width:120rpx;
		height: 60rpx;
		border-radius: 20rpx;
		background: #3CC51F;
		font-size: 30rpx;
		line-height:60rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: 100;
		color: white ;
	}
</style>
