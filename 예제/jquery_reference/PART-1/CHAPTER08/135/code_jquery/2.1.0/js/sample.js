$(function(){
  // 모든 요소에 click 이벤트를 할당한다
  $("*").click(function(evt){
    // 클릭시 실행된 요소 취득
    var cTarget = evt.currentTarget;
    var htmltext = $("output:first").html();
    $("output:first").html(htmltext+"<br>currentTarget : "+cTarget);
  });
});