$(function(){
  // 초깃값을 설정한다
  var percent = 0;
  // 프로그래스 바를 설정한다
  $("#energyStatus").progressbar({
    // 최댓값을 설정한다
    max : 200
  });
  // 프로그래스 바를 표시한다
  (function(){
    $("#energyStatus").progressbar("value", percent);
    // 진행 상황 비율을 늘린다
    percent++;
    // 100%가 되기까지 자기자신을 20msec마다 호출한다
    if (percent <= 100){
      setTimeout(arguments.callee, 20);
    }
  })();
});