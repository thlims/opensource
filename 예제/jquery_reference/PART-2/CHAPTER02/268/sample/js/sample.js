$(function(){
  // 초깃값을 설정한다
  var percent = 0;
  // 업데이트 전에 한번 표시할 필요가 있다
  $("#updateStatus").progressbar();
  // 프로그래스 바를 표시한다
  (function(){
    $("#updateStatus").progressbar("value", percent);
    // 진행 상황 비율을 늘린다
    percent++;
    // 100%가 되기까지 자기 자신을 100msec마다 호출한다
    if (percent <= 100){
      setTimeout(arguments.callee, 100);
    }
  })();
});