$(function(){
  $(":button").click(function(){
    $(":enabled").each(function(){
      // 텍스트 필드만 대상으로 한다
      if($(this).attr("type") == "text"){
        // 要素をdisableにする
        $(this).attr("disabled", "disabled");
      }
    });
  });
});
