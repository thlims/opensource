$(function(){
  // 버튼에 click 이벤트를 할당한다
  $(":button").click(function(){
    // 요소에 테두리를 두른다
    $(":input").css("border", "2px dotted red");
  });
});