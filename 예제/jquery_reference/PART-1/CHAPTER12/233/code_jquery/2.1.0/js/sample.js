// ready 이벤트를 발행하지 않도록 한다
$.holdReady(true);
// 처리1로 표시한다
$("output:first").html("처리1 실행<br>");
// 버튼에 이벤트를 할당한다
$(":button:first").click(function(){
  // ready 이벤트 보류 해제. 이로써 ready 이벤트가 발행된다
  $.holdReady(false);
});
// 이하는 ready 이벤트 발행시 처리된다
$(function(){
  // 처리2로 표시한다
  var htmlData = $("output:first").html();
  $("output:first").html(htmlData+"처리2 실행<br>");
});