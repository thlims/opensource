$(function(){
  // img 요소에 click 이벤트 할당
  $("img").click(function(){
    // img 요소의 부모 요소 배경색을 바꾼다
    $(this).offsetParent().css("background-color", "yellow");
  });
});