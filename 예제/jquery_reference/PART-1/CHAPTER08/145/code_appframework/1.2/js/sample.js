$(function(){
  // 모든 요소에 click 이벤트를 할당한다
  $("div").click(function(evt){
    // 현재 전달 상태 취득
    var flag = evt.isImmediatePropagationStopped();
    // 상태를 나타내는 메시지 창 표시
    alert("isImmediatePropagationStopped()실행 전："+flag);
    // 이벤트 전달을 이 요소로 금지
    evt.stopImmediatePropagation();
    // 현재 전달 상태 취득
    var flag = evt.isImmediatePropagationStopped();
    // 상태를 나타내는 메시지 창 표시
    alert("isImmediatePropagationStopped()실행 후："+flag);
  });
});