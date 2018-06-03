$(function(){
  // 가장 안쪽에 click 이벤트를 할당한다
  $("#Lv3").click(function(evt){
    // 이벤트 전달을 이 요소로 금지
    evt.stopImmediatePropagation();
    // 전달 상태 표시
    $("output").html($("output").html()+"<br>(이벤트 발생)："+evt.currentTarget.id);
  });
  // 두 번째 div 요소에 click 이벤트를 할당한다
  $("#Lv2").click(function(evt){
    // 이벤트 전달 금지
    evt.stopPropagation();
    // 전달 상태 표시
    $("output").html($("output").html()+"<br>이벤트 발생："+evt.currentTarget.id);
  });
  // 모든 div 요소에 click 이벤트를 할당한다
  $("div").click(function(evt){
    $("output").html($("output").html()+"<br>[이벤트 발생]："+evt.currentTarget.id);
  });
});