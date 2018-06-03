$(function(){
  // 이미지에 click 이벤트를 할당한다
  $("#photo1").click(function(){
    // 이미지 불투명도 설정
    $(this).css("opaicty", 0.25);
    setTimeout(function(){
      $("#photo1").css("opaicty", 1.0);
    }, 2000);
    // 클릭한 부분의 표시를 위한 메시지
    $("#result").text("이미지에 Click 이벤트 발생："+Date.now());
  });
  // 버튼에 클릭 이벤트를 할당한다
  $("#sendEvent").click(function(){
    // 이미지에 click 이벤트 전송
    $("#photo1").trigger("click");
  });
});