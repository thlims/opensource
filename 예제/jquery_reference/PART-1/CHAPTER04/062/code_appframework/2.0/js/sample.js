$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $("#setProp").click(function(){
    // img 요소에 tax 프로프터 추가
    $("#coin").prop("tax", 0.1);
  });
  // 두 번째 버튼에 이벤트 할당
  $("#readProp").click(function(){
    // img 요소의 tax 프로퍼티 표시
    alert($("#coin").prop("tax"));
  });
  // 세 번째 버튼에 이벤트 할당
  $("#removeProp").click(function(){
    // img 요소의 tax 프로퍼티 삭제
    $("#coin").removeProp("tax");
  });
});