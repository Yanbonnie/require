require(["../config"], function(){
	require(['jquery','moduPage','moduB','./js/page/test.js'],function($,myPage,b,test){	
		
		$('#btn2').on('click',function(){
			test.showNum(test.a)
		})

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