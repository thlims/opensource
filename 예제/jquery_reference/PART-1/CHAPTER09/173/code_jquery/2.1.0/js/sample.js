$(function(){
  $("#btn1").toggle(function(){
    // 이미지를 애니메이션하면서 숨긴다
    $("#photo1").hide("fast");
  },function(){
    // 이미지를 애니메이션하면서 표시한다
    $("#photo1").show("slow");
  });
  // 애니메이션 완료 후에 처리를 실행한다
  $("#btn2").toggle(function(){
    // 0밀리초로 하거나 매개변수 0이면 애니메이션 없음으로 처리
    $("#photo2").hide(0, function(){
      // 비표시 처리가 끝났으므로 메시지 표시
      $("output:first").text("");
    });
  },function(){
    $("#photo2").show(1000, function(){
      // 표시 처리가 끝났으므로 메시지 삭제
      $("output:first").text("표시 완료");
    });
  });
});