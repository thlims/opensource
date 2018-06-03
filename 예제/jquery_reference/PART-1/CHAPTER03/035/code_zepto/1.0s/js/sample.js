$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $("#btn1").click(function(){
    $("img:hidden").each(function(){
      // 요소에 테두리를 두른다
      $(this).css("border", "4px solid blue");
    });
  });
  // 두 번째 버튼에 이벤트 할당り当て
  $("#btn2").click(function(){
    $("img").show();
  });
});