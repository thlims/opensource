$(function(){
  $(":button").click(function(){
    $("[type=text]:enabled").each(function(){
      // 배경색을 주황색으로 표시한다
      $(this).css("background", "orange");
    });
  });
});