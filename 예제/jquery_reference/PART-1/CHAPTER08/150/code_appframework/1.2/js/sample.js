$(function(){
  // 이미지에 마우스 다운 이벤트를 할당한다
  $("#photo1").on("mousedown", function(){
    // 이미지 불투명도 설정
    $(this).css("opacity", 0.5);
    // 마우스 버튼이 눌러진 상태임을 알리는 메시지 표시
    $("#result").text("마우스 다운 이벤트 발생");
  });
  // 이미지에 마우스 다운 이벤트를 할당한다
  $("#photo1").on("mouseup", function(){
    // 이미지 불투명도 설정
    $(this).css("opacity", 1.0);
    // 마우스 버튼이 떨어진 상태임을 알리는 메시지 표시
    $("#result").text("마우스 업 이벤트 발생");
  });
});