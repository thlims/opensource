$(function(){
  // 버튼에 이벤트를 할당한다
  $(":button").click(function(){
    // 표의 온도 부분만 삭제한다
    $("#temp tbody tr td:odd").empty();
  });
});