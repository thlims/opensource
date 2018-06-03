$(function(){
  // 이미지에 click 이벤트를 할당한다
  $("#photo1").click(function(){
    // 이미지 불투명도 설정
    $(this).fadeTo(200, 0.5);
    //클릭한 것을 알리기 위한 메시지 표시
    $("#result").text("클릭 이벤트 발생");
  });
});