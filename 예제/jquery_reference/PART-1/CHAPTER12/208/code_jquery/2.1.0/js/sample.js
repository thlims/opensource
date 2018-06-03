$(function(){
  // 버튼에 click 이벤트 할당
  $("#check").click(function(){
    // 불투명도를 지원하는지 확인한다
    var flag = $.support.opacity;
    // 결과를 표시한다
    $("output:eq(0)").text("opacity : "+flag);
  });
});