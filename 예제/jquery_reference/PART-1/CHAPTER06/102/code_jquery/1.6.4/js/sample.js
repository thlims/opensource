$(function(){
  $(":button").click(function(){
    // 문자열을 ID 이름 pi 뒤에 삽입
    $("#pi").after(Math.PI);
  });
});