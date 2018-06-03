$(function(){
  // 버튼에 click 이벤트를 할당
  $("#btn").click(function(){
    // down 클래스가 아닌 td 요소의 문자색을 검정으로 표시한다
    $("td:not(.down)").css("color", "black");
  });
});