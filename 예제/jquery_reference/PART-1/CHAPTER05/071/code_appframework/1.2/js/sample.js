$(function(){
  // input 요소 획득
  var ele = $("input");
  // 첫 번째 요소 배경색을 주황색으로 표시한다
  ele.first().css("background", "orange");
  // 마지막 요소 배경색을 회색으로 표시한다
  ele.last().css("background", "gray");
});