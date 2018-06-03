$(function(){
  $("#btn1").toggle(function(){
    // 이미지를 페이드 아웃시킨다
    $("#photo1").fadeOut("fast");
  },function(){
    // 이미지를 페이드 인 한다
    $("#photo1").fadeIn("slow");
  });
  // 애니메이션 완료 후에 처리를 실행한다
  $("#btn2").click(function(){
    $("#photo1").fadeTo("slow", 0.5, function(){
      // 페이드 처리가 끝났으므로 메시지 표시
      $("output:first").text("페이드 완료");
    });
  });
});