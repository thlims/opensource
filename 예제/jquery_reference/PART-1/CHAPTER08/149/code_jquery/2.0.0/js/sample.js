$(function(){
  // 이미지에 더블 클릭 이벤트를 할당한다
  $("#photo1").dblclick(function(){
    // 이미지 불투명도 설정
    $(this).fadeTo(200, 0.5);
    // 더블 클릭된 것을 알리기 위한 메시지 표시
    $("output:first").text("더블클릭 이벤트 발생");
  });
});