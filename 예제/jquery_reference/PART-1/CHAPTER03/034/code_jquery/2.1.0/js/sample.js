$(function(){
  // 첫 번째 버튼에 click 이벤트를 할당한다
  $(":button:eq(0)").click(function(){
    // 요소에 테두리를 두른다
    $("img:visible").css("border", "4px solid blue");
  });
  // 두 번째 버튼에 click 이벤트를 할당한다
  $(":button:eq(1)").click(function(){
    // 이미지를 표시한다
    $("img").show();
  });
});