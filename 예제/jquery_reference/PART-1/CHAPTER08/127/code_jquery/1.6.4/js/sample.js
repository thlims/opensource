$(function(){
  // 이미지에 click 이벤트를 할당한다
  $("#photo1").click(function(){
    // 이미지 불투명도 설정
    $(this).fadeTo(250, 0.25).delay(500).fadeTo(250, 1.0);
    // 클릭한 부분의 표시를 위한 메시지
    $("output:first").text("이미지에 Click 이벤트 발생："+Date.now());
  });
  // 버튼에 클릭 이벤트를 할당한다
  $("#sendEvent").click(function(){
    // 이미지에 click 이벤트 전송
    $("#photo1").trigger("click");
  });
});