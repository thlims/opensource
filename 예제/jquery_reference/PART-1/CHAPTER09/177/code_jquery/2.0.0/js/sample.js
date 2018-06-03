$(function(){
  // btn1에 이벤트 설정
  $("#btn1").click(function(){
    $("#photo1").slideToggle("slow");
  });
  // btn2에 이벤트 설정
  $("#btn2").click(function(){
    $("#photo1").slideToggle("fast", function(){
      $("output:first").text("슬라이드 다운 완료");
    });
  });
});