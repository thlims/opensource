$(function(){
  // 초깃값을 설정한다
  var percent = 0;
  // 프로그래스 바를 설정한다
  $("#dlStatus").progressbar({
    // 초깃값을 설정한다
    value : 75
  });
  // 무효 버튼이 클릭되었을 때의 처리
  $("#dis").click(function(){
    // 프로그래스 바를 무효로 한다
    $("#dlStatus").progressbar("disable");
  });
  // 유효 버튼이 클릭되었을 때의 처리
  $("#ena").click(function(){
    // 프로그래스 바를 무효로 한다
    $("#dlStatus").progressbar("enable");
  });
});