$(function(){
  // 스피너를 설치한다
  $("#orderNumber").spinner({
    // 스핀 버튼이 클릭 중인 처리를 한다
    spin : function(evt, ui){
      // 이벤트 발생시의 시간을 표시한다
      $("#result1").text("spin 이벤트 발생："+Date.now());
    },
    // 스핀 버튼이 눌리기 시작했을 때의 처리를 한다
    start : function(evt, ui){
      // 이벤트 발생시의 시간을 표시한다
      $("#result2").text("start 이벤트 발생："+Date.now());
    },
    // 스핀 버튼 누르기가 끝났을 때의 처리를 한다 
    stop : function(evt, ui){
      // 이벤트 발생시의 시간을 표시한다
      $("#result3").text("stop 이벤트 발생："+Date.now());
    },
    // 내용이 변화했을 때의 처리를 한다
    change : function(evt, ui){
      // 이벤트 발생시의 시간을 표시한다
      $("#result4").text("change 이벤트 발생："+Date.now());
    }
  });
});