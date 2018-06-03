$(function(){
  // 버튼에 click 이벤트를 할당한다
  $("#btn").click(function(){
    // 첫 번째 input 요소를 지정한다
    $("input:first").each(function(){
      // 배경색을 주황색으로 한다
      $(this).css("background", "orange");
    });
  });
});