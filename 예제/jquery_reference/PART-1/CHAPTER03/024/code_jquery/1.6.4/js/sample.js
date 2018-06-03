$(function(){
  // 짝수 번째 배경색을 주황색으로 표시한다
  $("#sale tbody tr:even").css("background-color", "orange");
  // 홀수 번째 배경색을 노랑색으로 표시한다
  $("#sale tbody tr:odd").css("background-color", "yellow");
});