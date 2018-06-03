$(function(){
  // ボタンにイベントを割り当て
  $(":button").click(function(){
    // img要素のsrc프로퍼티 삭제
    $("#myPhoto").removeProp("src");
  });
});