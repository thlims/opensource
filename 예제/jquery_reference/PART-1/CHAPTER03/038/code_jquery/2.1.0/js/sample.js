$(function(){
  $(":button").click(function(){
    $("input[value|='mz']").each(function(){
      // 텍스트 필드만 대상으로 한다
      if($(this).attr("type") == "text"){
        // 배경색을 주황색으로 표시한다
        $(this).css("background", "orange");
      }
    });
  });
});