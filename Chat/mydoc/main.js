class timeDetail{
		constructor(date){
			this.dateYear = date.getYear()+1900; //默认当前日期年份减去1900
			this.dateMonth = date.getMonth()+1;
			// this.dateMonth =this.dateMonth > 9 ? this.dateMonth : '0' + (this.dateMonth+1);
			
			this.dateWeek = date.getDay() +1; //返回0-6; 0代表周日
			
			this.dateDay = date.getDate(); //返回1-31; 一个月中的第几天
			// this.dateDay =this.dateDay > 9 ? this.dateDay : '0' + (this.dateDay+1);
			
			this.dateHours =date.getHours();
			// this.dateHours =this.dateHours > 9 ? this.dateHours : '0' + (this.dateHours+1);
			
			this.dateMinutes =date.getMinutes();
			this.dateMinutes =this.dateMinutes > 9 ? this.dateMinutes : '0' + (this.dateMinutes+1);
			 
		}
		getTodayStart(){
			let result = new Date(this.dateYear +'-'+this.dateMonth+'-'+this.dateDay) ;
			return  result;
		}
		getTimeSpan(){
			return this.dateHours < 12 ? '上午':'下午';
		}
	}

export default{
	getCurrentTimeDifferences:function(date){
			let result='';
			let nowDate = new Date();
			 
			let newsDate = new Date(date);
			
			let now = new timeDetail(nowDate);
			let news = new timeDetail(newsDate);
				
// 			console.log(now);
// 			console.log(news);
			
			let  dateSpan =now.getTodayStart() -  news.getTodayStart(); //获取间隔毫秒数
			let daysBetween = Math.floor(dateSpan / (24 * 3600 * 1000)); // 计算出天数
			
			 
			if(now.dateYear != news.dateYear){//不同年
				result =`${news.dateYear}年${news.dateMonth}月${news.dateDay}日`; 
				// console.log(result);
				return result;
			}
			
			//同一年
			if( daysBetween == 0){  //同一天
				result = `${news.getTimeSpan()}${news.dateHours}:${news.dateMinutes}`;  
			}else if(daysBetween ==1){ //昨天
				result ='昨天';
			}else{ 
				
				result =`${news.dateMonth}月${news.dateDay}日`; 
			} 
			
			// console.log(result);
			return result;

	 },
	removeSpacesHeadandTrial :function(str){
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},
	removeSpacesHead:function(str){
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},
	removeSpacesTrial:function(str){
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},
	
	emailCheck: function(e){
		//判断是否为邮箱格式
		let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;//邮箱格式验证
		
		 
		e = this.removeSpacesHeadandTrial(e);
		if(e.length==0){
			return '请输入邮箱!';
		}
		if(reg.test(e)){
			return true;
		}else{
			return '邮箱格式不正确!';
		}
	},
	userNameCheck :function(e){
		//判断是否为用户名格式
		let reg = /^[\u4e00-\u9fa5A-Za-z0-9-_]*$/;//只能中英文，数字，下划线，减号
		e = e.toString().trim();
		if(e.length==0){
			return '请输入用户名!';
		}
		if(reg.test(e)){
			return true;
		}else{
			return '用户名只能包含中英文,数字,下划线,减号!';
		}
	},
	passwordCheck: function(e){
		let reg = /^[a-zA-Z]\w{5,17}$/;//以字母开头，长度在6-18之间，只能包含字符、数字和下划线.
		e = this.removeSpacesHeadandTrial(e);
		if(e.length==0){
			return '请输入密码!';
		}
		if(reg.test(e)){
			return true;
		}else{
			return '请输入6-18位密码包含字符,数字和下划线!';
		}
	}
} 
		 