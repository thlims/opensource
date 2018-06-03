$(function(){
  // 이미지에 토글 이벤트를 할당한다
  $("#photo1").toggle(function(){
    // 이미지 불투명도 설정
    $(this).css("opacity", 0.5);
    // 클릭한 것을 알리는 메시지 표시
    $("#result").text("불투명도 50%");
  }, function(){
    // 이미지 불투명도 설정
    $(this).css("opacity", 1.0);
    // 클릭한 것을 알리는 메시지 표시
    $("#result").text("불투명도 100%");
  });
});