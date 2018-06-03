$(function(){
  // 내용에 –가 있는 경우는 빨간색 문자로 표시한다
  $("#sale tbody td:contains('-')").css("color", "red");
});