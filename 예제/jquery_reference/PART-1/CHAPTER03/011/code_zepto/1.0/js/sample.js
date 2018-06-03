$(function(){
  // 버튼에 이벤트 할당
  $("#btn").click(function(){
    // src 속성이 있는 요소에 빨간 테두리를 두른다
    $("[src]").css("border", "4px solid red");
  });
});