$(function(){
  // 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // ID 이름 imageList 중 세 번째보다 이후에 있는 ok 클래스 이외의 불투명도를 바꾼다
    $("#imageList img").eq(2).nextUntil(".ok").css("opacity", 0.3);
  });
});