$(function(){
  // btn1에 이벤트 설정
  $("#btn1").click(function(){
    $("#photo1").fadeToggle("slow");
  });
  // btn2에 이벤트 설정
  $("#btn2").click(function(){
    $("#photo1").fadeToggle("fast", function(){
      $("#result").text("페이드 완료");
    });
  });
});