export default{
	pageTurnTo:function(page){
		let tempurl ='';
		switch(page){
			case 'register':
				tempurl = '../register/register';
				break;
			case 'search':
				tempurl = '../search/search';
				break;
			default:
				break;
		}
		uni.navigateTo({
			url: tempurl,
		})
	},
	backto:function(i){
		uni.navigateBack({
			data:i,  //返回上一级页面
		});
	}
}