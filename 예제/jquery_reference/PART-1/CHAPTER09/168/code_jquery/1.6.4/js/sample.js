$(function(){
  // 버튼 클릭으로 애니메이션 시작
  $("#btn1").toggle(function(){
    $("#photo1").hide(3000);
  },function(){
    $("#photo1").show(3000);
  });
  // 버튼 클릭으로 애니메이션 정지
  $("#btn2").click(function(){
    $("#photo1").stop();
  });
});