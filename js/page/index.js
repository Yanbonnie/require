
require(["../config"], function(){
	require(['jquery','moduPage','moduB','./js/page/test.js','./js/lib/jquery.pagination.js'],function($,myPage,b,test){	
		
		$(function(){
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
	
	
			$(".pagination").pagination({
				pageCount: 50,
				jump: true,
				coping: true,
				jumpBtn: '确定',
				prevContent: '上一页',
				nextContent: '下一页',
				count: 2,
				callback:function(options){
					console.log(options)
				}
			},function(pagination){
				console.log("分页初始化成功",pagination)
			});
		})
	});
}) 