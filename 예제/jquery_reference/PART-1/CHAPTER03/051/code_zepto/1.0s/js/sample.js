$(function(){
  // 버튼에 click 이벤트를 할당한다
  $("#btn").click(function(){
    // 요소에 테두리를 두른다
    $(":reset").css("border", "2px dotted red");
  });
});