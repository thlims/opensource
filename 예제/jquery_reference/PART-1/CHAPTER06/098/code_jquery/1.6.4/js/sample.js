$(function(){
  $(":button").click(function(){
    // ID 이름 msg 요소를 ID 이름 pi 앞에 삽입
    $("#msg").insertBefore("#pi");
  });
});