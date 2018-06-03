$(function(){
  // 버튼에 click 이벤트를 할당한다
  $("#btn").click(function(){
    // 배경색을 주황색으로 한다
    $("input[type=text]:last").css("background", "orange");
  });
});