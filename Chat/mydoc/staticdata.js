// 静态数据模拟


export default{
	//获取聊天列表数据
	friends: function(){
		let freindChatLists =[
			{
			     id : 1232,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 counts:12, 
				 time : '2020-06-16 12:12:03',
				 type:0,//消息类型 0;文本，1,图片，2 视频，3，语音
				 news: '如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。'
			},
			{
			     id : 2232,
				 imgurl:'w7.jpg',
				 name: '张学友',
				 counts:2,
				 time : '2019-06-16 14:12:03',
				 type:0,
				 news: '如果实现单行文本的溢出显示省略号同学们应该都知道用。'
			},
			{
			     id : 3232,
				 imgurl:'w7.jpg',
				 name: '陈奕迅',
				 counts:122,
				 time : '2020-06-15 09:12:03',
				 type:0,
				 news: '如果实现当然还需要加宽度width属来兼容部分浏览。'
			},
			{
			     id : 4232,
				 imgurl:'w7.jpg',
				 name: '邓紫棋',
				 counts: 233,
				 time :'2020-06-14 12:12:03',
				 type:0,
				 news: '如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。'
			} 
		]
		
		return freindChatLists;
		 
	},
	userSearchLists:function(){
			let userLists =[
			{
			     id : 1232,
				 imgurl:'w7.jpg',
				  username: '周二珂',
				  type: '0',//表示已加为好友 
			},
			{
			     id : 2232,
				 imgurl:'w7.jpg',
				 username: '张学友',
				 type: '0',//表示未加为好友 
			},
			{
			     id : 3232,
				 imgurl:'w7.jpg',
				 username: '陈奕迅',
				  type: '0',//表示已加为好友 
			},
			{
			     id : 4232,
				 imgurl:'w7.jpg',
				 username: '邓紫棋',
				 type: '0',//表示已加为好友 
			} 
		]
		
		return userLists;
	},
	myGroupLists:function(){
			let GroupLists = [
			{
			     groupid: 1232,
				 imgurl:'w7.jpg',
				 groupname:'周二珂啊啊',
				 type: '1',//普通群聊
			},
			{
			     groupid : 3232,
				 imgurl:'w7.jpg',
				 groupname: '陈奕迅啊啊',
				 type: '1',//普通群聊 
			},
			{
			     groupid : 4232,
				 imgurl:'w7.jpg',
				 groupname: '邓紫棋啊啊',
				 type: '1',//普通群聊 
			} 
		]
		
		return GroupLists;
	},
	myFriendLists:function(){
			let FriendLists =[
			{
			     userid: 1232,
				 imgurl:'w7.jpg',
				 username:'周二珂',
				 type: '1',//普通好友
			},
			{
			     userid : 3232,
				 imgurl:'w7.jpg',
				 username: '陈奕迅',
				 type: '1',//表示已加为好友 
			},
			{
			     userid : 4232,
				 imgurl:'w7.jpg',
				 username: '邓紫棋',
				 type: '1',//表示已加为好友 
			} 
		]
		
		return FriendLists;
	},
	groupSearchLists:function(){
			let groupLists =[
			{
			     id : 1232,
				 imgurl:'w7.jpg',
				 groupname: '周二珂啊啊',
				 type: '1',//表示已加入
			},
			{
			     id : 2232,
				 imgurl:'w7.jpg',
				 groupname: '张学友啊啊',
				 type: '0',//表示未加入 
			},
			{
			     id : 3232,
				 imgurl:'w7.jpg',
				 groupname: '陈奕迅啊啊',
				  type: '1',//表示已加入
			},
			{
			     id : 4232,
				 imgurl:'w7.jpg',
				 groupname: '邓紫棋啊啊',
				 type: '1',//表示已加入
			} 
		]
		
		return groupLists;
	},
	//email是否存在
	emailIsExist : function(email){
		// return true;
		return false;  
	},
	usernameIsExist: function(username){
		// return true;
		return false;  
	},
	//获取聊天列表数据
	getFriendRequest: function(){
		let freindRequestLists =[
			{
			     id : 1232,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 time : '2020-06-16 12:12:03',
				 content: '如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。'
			},
			{
			     id : 2232,
				 imgurl:'w7.jpg',
				 name: '张学友',
				 
				 time : '2019-06-16 14:12:03',
				 content: '如果实现单行文本的溢出显示省略号同学们应该都知道用。'
			},
			{
			     id : 3232,
				 imgurl:'w7.jpg',
				 name: '陈奕迅',
				 
				 time : '2020-06-15 09:12:03',
				 content: '如果实现当然还需要加宽度width属来兼容部分浏览。'
			},
			{
			     id : 4232,
				 imgurl:'w7.jpg',
				 name: '邓紫棋',
				 
				 time :'2020-06-14 12:12:03',
				 content: '如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。'
			} 
		]
		
		return freindRequestLists;
		 
	},
	getChatList:function(){
		let chatList=[
			{
			     id : 1232,
				 userid:11,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 time : '2020-06-16 12:12:03',
				 content: '如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。',
			     type:0
			},
			{
			     id : 1234,
				 userid:14,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 time : '2020-06-16 12:12:03',
				 content: '如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。',
			     type:0
			},
			{
			     id : 1235,
				 userid:13,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 time : '2020-06-16 12:12:03',
				 content: 'w7.jpg' ,
			     type:1
			},
			{
			     id : 1236,
				 userid:12,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 time : '2020-06-16 12:12:03',
				 content: 'erke.jpg' ,
			     type:1
			},{
			     id : 1237,
				 userid:11,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 time : '2020-06-16 12:12:03',
				 content: 'cp.jpg' ,
			     type:1
			},
			{
			     id : 1238,
				 userid:1233,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 time : '2020-06-16 12:12:03',
				 content: '如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。',
			     type:0
			},
			{
			     id : 12312,
				 userid:1233,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 time : '2020-06-16 12:12:03',
				 content: '12',
			     type:2
			},
			{
			     id : 12312,
				 userid:1235,
				 imgurl:'w7.jpg',
				 name: '周二珂',
				 time : '2020-06-16 12:12:03',
				 content: '11',
			     type:2
			},
		]
	    return chatList;
	}
	
}