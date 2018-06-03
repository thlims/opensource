$(function(){
  // 버튼에 이벤트를 할당한다
  $("#btn").click(function(){
    // 표의 온도 부분만 삭제한다
    $("#temp tr td").each(function(index, item){
      if (index & 1){
        $(this).empty();
      }
    });
  });
});