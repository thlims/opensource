$(function(){
  // 슬라이더를 설치한다
  $("#myslider").slider();
  // 작동 중지 버튼이 클릭된 경우의 처리
  $("#dis").click(function(){
    // 슬라이더를 작동 중지한다
    $("#myslider").slider("disable");
  });
  // 작동 버튼이 클릭된 경우의 처리 
  $("#ena").click(function(){
    // 슬라이더를 작동시킨다
    $("#myslider").slider("enable");
  });
});