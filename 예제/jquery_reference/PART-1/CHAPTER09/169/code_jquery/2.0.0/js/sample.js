$(function(){
  // btn1에 이미지 표시·비표시를 전환하는 이벤트를 설정한다
  $("#btn1").toggle(function(){
    $("#photo1").fadeOut();
  },function(){
    $("#photo1").fadeIn();
  });
  // btn2에 click 이벤트를 할당한다
  $("#btn2").click(function(){
    // 애니메이션 처리 간격을 설정한다
    $.fx.interval = parseFloat($("#msec").val());
  });
});