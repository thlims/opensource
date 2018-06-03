$(function(){
  // 초깃값을 설정한다
  var percent = 0;
  // 프로그래스 바를 설정한다
  $("#diskStatus").progressbar({
    // 프로그래스 바가 변화했을 때의 처리
    change : function(evt, ui){
      // 현재 값 읽기
      var per = $("#diskStatus").progressbar("value");
      $("#status").text(per+"%");
    },
    // 프로그래스 바가 max인 값까지 되었을 때의 처리
    complete : function(evt, ui){
      // 메시지를 표시한다
      $("#result").text("검사가 끝났습니다");
    }
  });
  // 프로그래스 바를 갱신한다
  (function(){
    $("#diskStatus").progressbar("value", percent);
    // 진행 상황 비율을 늘린다
    percent++;
    // 100%가 되기까지 자기 자신을 25msec마다 호출한다
    if (percent <= 100){
      setTimeout(arguments.callee, 25);
    }
  })();
});