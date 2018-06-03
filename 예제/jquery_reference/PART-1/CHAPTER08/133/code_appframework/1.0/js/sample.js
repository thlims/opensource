$(function(){
  // 이미지에 click 이벤트를 할당한다
  $("img").click(dispEventType);
  // 이미지에 mouseover 이벤트를 할당한다
  $("img").bind("mouseover", dispEventType);
  // 이미지에 mouseout 이벤트를 할당한다
  $("img").bind("mouseout", dispEventType);
  // 이벤트 종류를 표시한다
  function dispEventType(evt){
    // 이벤트 종류 읽기
    var eType = evt.type;
    // 이벤트 이름 표시
    $("#result").text(eType);
  }
});