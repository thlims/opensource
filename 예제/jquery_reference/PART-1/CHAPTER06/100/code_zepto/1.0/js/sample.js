$(function(){
  $("#btn").click(function(){
    // 문자열을 ID 이름 pi 뒤에 추가
    $("#pi").append(Math.PI, "<span>이다.</span>");
  });
});