$(function(){
  // th, td 요소의 click 이벤트를 할당한다
  $("td, th").click(function(){
    // 클릭시 부모 요소의 배경색을 변경한다
    $(this).parent().css("background-color", "yellow");
  });
});