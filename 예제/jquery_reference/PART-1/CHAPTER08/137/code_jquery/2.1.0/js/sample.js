$(function(){
  // img 요소에 mouseover 이벤트를 할당한다
  $("img").mouseover(function(evt){
    // 마우스 오버 전에 마우스가 올려져 있던 요소 취득
    var eTarget = evt.relatedTarget;
    var htmltext = $("output:first").html();
    $("output:first").html(htmltext+"<br>[mouseover 전] : "+eTarget);
  });
  // img 요소에 mouseout 이벤트를 할당한다
  $("img").mouseout(function(evt){
    // 마우스 오버 전에 마우스가 올려져 있던 요소 취득
    var eTarget = evt.relatedTarget;
    var htmltext = $("output:first").html();
    $("output:first").html(htmltext+"<br>[mouseout 전] : "+eTarget);
  });
});