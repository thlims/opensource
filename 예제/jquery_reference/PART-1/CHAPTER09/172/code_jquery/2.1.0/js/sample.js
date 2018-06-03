$(function(){
  // btn1 버튼에 이벤트를 설정한다
  $("#btn1").click(function(){
    // 이미지 표시·비표시를 전환한다
    $("#photo1").toggle();
  });
  // btn2 버튼에 이벤트를 설정한다
  $("#btn2").click(function(){
    // 이미지 표시·비표시를 페이드 효과와 함께 전환한다 
    $("#photo1").toggle("slow");
  });
});