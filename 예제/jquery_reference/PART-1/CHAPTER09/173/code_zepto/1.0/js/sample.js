$(function(){
  $("#btn1").click(function(){
    // 이미지를 애니메이션하면서 표시한다
    $("#photo1").show("fast");
  });
  $("#btn2").click(function(){
    // 이미지를 애니메이션하면서 숨긴다
    $("#photo1").hide("slow");
  });
  // 애니메이션 완료 후에 처리를 실행한다
  $("#btn3").click(function(){
    // 0밀리초로 하거나 매개변수 0이면 애니메이션 없음으로 처리
    $("#photo2").hide(0, function(){
      // 비표시 처리가 끝났으므로 메시지 표시
      $("#result").text("완료");
    });
  });
});