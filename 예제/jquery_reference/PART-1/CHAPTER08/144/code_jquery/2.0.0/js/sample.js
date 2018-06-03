$(function(){
  // 첫 번째 a 요소에 click 이벤트를 할당한다
  $("div").click(function(evt){
    // 현재 전달 상태 취득
    var flag = evt.isPropagationStopped();
    // 상태를 나타내는 메시지 창 표시
    alert("isDefaultPrevented()실행 전："+flag);
    // 이벤트 전달 금지
    evt.stopPropagation();
    // 현재 전달 상태 취득
    var flag = evt.isPropagationStopped();
    // 상태를 나타내는 메시지 창 표시
    alert("isDefaultPrevented()실행 후："+flag);
  });
});