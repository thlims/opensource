$(function(){
  // input 요소 버튼에 click 이벤트를 할당한다
  $("#btn").click(function(){
    // 번호를 붙인 리스트 항목을 추가한다
    $("ol").css("border-bottom", "1px solid black").add("div").css("color", "red");
  });
});