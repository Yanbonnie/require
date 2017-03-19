define(['jquery'],function($){	
	var exports = {
		'page':page
	};
	function page(obj){
				if(!obj.id){return false}
				var oDiv = $("#"+obj.id);
				var nowPage = obj.nowPage;
				var allPage = obj.allPage;
				var callback = obj.callback || function(){}
				
				//首页显示
				if(nowPage >= 4 && allPage >= 6){
					var oA = '<a href="#1">首页</a>';
					oDiv.append(oA);
				}
				
				//上一页显示
				if(nowPage >= 2 && allPage >= 6){
					var oA = '<a href="#'+(nowPage-1)+'">上一页</a>';
					oDiv.append(oA);
				}
				
				//中间部分
				if(allPage <= 5){
					var text = "";
					for( var i=1; i<=allPage; i++){
						if(i == nowPage){
							text = i;
						}else{
							text = "["+i+"]"
						}
						var oA = '<a href="#'+i+'">'+text+'</a>';
						oDiv.append(oA);
					}
				}else{
					var text = "";
					for( var i=1; i<=5; i++){						
						//当nowPage=1 or nowPage=2 的时候出现-1 or 0 的情况
						if(nowPage == 1 || nowPage == 2){
							if(nowPage == i){
								text = i
							}else{
								text = "["+i+"]"
							}
							var oA = '<a href="#'+i+'">'+text+'</a>';
							oDiv.append(oA);
						}
						
						//当nowPage=allPage or nowPage=allPage-1  的时候出现大于allPage 的情况
						else if( (allPage - nowPage) == 0 || (allPage - nowPage) == 1){
							if(nowPage == (nowPage - 5 + i)){
								text = (nowPage - 5 + i)
							}else{
								text = "["+(nowPage - 5 + i)+"]"
							}
							
							var oA = '<a href="#'+(nowPage - 5 + i)+'">'+text+'</a>';
							oDiv.append(oA);
						}
						//一般情况
						else{
							if(nowPage == (nowPage - 3 + i)){
								text = (nowPage - 3 + i);
							}else{
								text = "["+(nowPage - 3 + i)+"]"
							}
							var oA = '<a href="#'+(nowPage - 3 + i)+'">'+text+'</a>';
							oDiv.append(oA);
						}
					}
				}
				
				//下一页
				if((allPage - nowPage) >= 1 ){
					var oA = '<a href="#'+(nowPage+1)+'">下一页 </a>';
					oDiv.append(oA)
				}
				
				//出现尾页
				if((allPage - nowPage) >= 3 && allPage >= 6){
					var oA = '<a href="#'+allPage+'">尾页 </a>';
					oDiv.append(oA)
				}
				
				var oSpan = '<span>'+nowPage+'/'+allPage+'</span>';
				oDiv.append(oSpan);
				callback(nowPage,allPage);
				
				oDiv.find('a').on('click',function(){
					var hrefNum  = $(this).attr('href');
					var nowPage = parseInt(hrefNum.substring(1))
					oDiv.children().remove();
					
					obj.nowPage = nowPage;
					page(obj);
				})
				
			}
	return exports;
})