$(function(){
  // input 요소에 blur 이벤트를 할당한다
  $("input").blur(function(event){
    // 포커스가 벗어난 요소 배경색을 주황색으로 한다
    $("input").css("background-color", "white");
    $(this).css("background-color", "orange");
  });
});