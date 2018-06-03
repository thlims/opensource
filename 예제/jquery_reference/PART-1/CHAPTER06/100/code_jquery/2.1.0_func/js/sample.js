$(function(){
  $(":button").click(function(){
    // 문자열을 ID 이름 pi 뒤에 추가
    $("#pi").append(function(){ return "c and r"}, "<span>이다.</span>");
  });
});