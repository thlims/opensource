$(function(){
  $(":button").click(function(){
    $(":reset").each(function(){
      // 요소에 테두리를 두른다
      $(this).css("border", "2px dotted red");
    });
  });
});