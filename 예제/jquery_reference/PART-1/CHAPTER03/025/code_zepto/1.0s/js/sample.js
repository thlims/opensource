$(function(){
  // 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // td 요소가 부모 요소라면 배경색을 주황색으로 한다
    $("td:parent").css("background-color", "orange");
  });
});