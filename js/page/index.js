require(["../config"], function(){
	require(['jquery','moduPage','moduB'],function($,myPage,b){		
		myPage.page({
			id:"div1",
			nowPage:5,
			allPage:10,
			callback:function(nowPage,allPage){
				console.log('nowPage:'+nowPage+'allPage:'+allPage)
			}
		});
	});
}) 