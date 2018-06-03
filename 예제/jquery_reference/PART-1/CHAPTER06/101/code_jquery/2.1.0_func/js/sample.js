$(function(){
  $(":button").click(function(){
    // 문자열을 ID 이름 pi 앞에 삽입
    $("#pi").before(function(){ return "SNK ASO"});
  });
});