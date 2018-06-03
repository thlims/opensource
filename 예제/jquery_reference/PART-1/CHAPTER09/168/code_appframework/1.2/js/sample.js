$(function(){
  // 버튼 클릭으로 애니메이션 시작
  $("#btn1").click(function(){
    $("#photo1").hide();
  });
  // 버튼 클릭으로 애니메이션 정지
  $("#btn2").click(function(){
    $("#photo1").stop();
  });
});