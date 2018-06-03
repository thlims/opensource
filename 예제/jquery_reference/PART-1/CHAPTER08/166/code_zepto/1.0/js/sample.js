$(function(){
  // 요소에 scroll 이벤트를 할당한다
  $("#myWindow").scroll(function(evt){
    // 현재 스크롤 좌표를 얻는다
    // var x = $(this).scrollLeft();  // Zepto.js 1.0にはないです
    var x = 0;
    var y = $(this).scrollTop();
    //스크롤 양을 표시한다
    $("#result").text(x+", "+y);
  });
});