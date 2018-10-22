define(['jquery'],function ($) {
    var a = 10 ;
    $('#btn').on('click',function(){
       console.log("我被点击了")
    })
    function showNum(num){
        console.log("我是传入的:"+num)
    }
    return {
        a: a,
        showNum:showNum
    }
});





// document.getElementById('btn').onclick=function(){
//     alert('哈哈哈，我被点击了')
// }