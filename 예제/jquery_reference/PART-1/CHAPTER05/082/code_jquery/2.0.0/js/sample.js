$(function(){
  // 버튼에 click 이벤트 할당
  $(":button:eq(0)").click(function(){
    // temple 클래스 형제 요소를 모두 찾아 불투명도를 바꾼다
    $(".temple").siblings().css("opacity", 0.3);
  });
});