$(function(){
  // 세 번째의 tr 요소를 지정한다
  $("#sale tr").eq(2).css("background-color", "orange");
  //끝에서 다섯 번째 tr 요소를 지정한다
  $("#sale tr").eq(-5).css("background-color", "yellow");
});