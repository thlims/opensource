$(function(){
  // 첫 번째 div 요소를 클릭했을 때 처리
  $("div:eq(0)").click(function(){
    // blind 효과로 숨긴다
    $(this).hide("blind");
  });
  // 두 번째 div 요소를 클릭했을 때 처리
  $("div:eq(1)").click(function(){
    // shake 효과로 숨긴다
    $(this).hide("shake");
  });
  // 세 번째 div 요소를 클릭했을 때 처리
  $("div:eq(2)").click(function(){
    // slide 효과로 숨긴다
    $(this).hide("slide");
  });
});