$(function(){
  // 요소에 scroll 이벤트를 할당한다
  $("#myWindow").scroll(function(evt){
    // 현재 스크롤 좌표를 얻는다
    var x = $(this).scrollLeft();
    var y = $(this).scrollTop();
    //스크롤 양을 표시한다
    $("output:first").text(x+", "+y);
  });
});