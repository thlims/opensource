$(function(){
  // 버튼에 click 이벤트를 할당한다
  $(":button:eq(0)").click(function(){
    // D 이름 imageList 중 세 번째 이후 ok 클래스 외의 불투명도를 변경한다
    $("#imageList img").not(".ok").css("opacity", 0.3);
  });
});