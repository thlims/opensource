$(function(){
  // btn1에 이미지 표시·비표시를 전환하는 이벤트를 설정한다
  $("#btn0").click(function(){
    $("#photo1").fadeIn("slow");
  });
  $("#btn1").click(function(){
    $("#photo1").fadeOut("slow");
  });
  // btn2에 click 이벤트를 할당한다
  $("#btn2").click(function(){
    // 애니메이션 처리를 ON으로 한다
    $.fx.off = false;
  });
  // btn3에 클릭 이벤트를 할당한다
  $("#btn3").click(function(){
    // 애니메이션 처리를 OFF로 한다
    $.fx.off = true;
  });
});