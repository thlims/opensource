$(function(){
  // 첫 번째 이미지에 click 이벤트를 할당한다
  $("#photo1").click(function(){
    // 이미지 효과 설정
    $(this).fadeTo(250, 0).delay(3000).fadeTo(250, 1.0);
  });
  // 두 번째 이미지에 click 이벤트를 설정한다
  $("#photo2").click(function(){
    // 이미지 효과 설정(대기 시간 없음)
    $(this).fadeTo(250, 0).fadeTo(250, 1.0);
  });
});