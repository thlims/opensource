$(function(){
  $(":button").click(function(){
    $(":disabled").each(function(){
      // 텍스트 필드만 대상으로 한다
      if($(this).attr("type") == "text"){
        // 要素のdisable属性を削除する
        $(this).removeAttr("disabled");
      }
    });
  });
});
