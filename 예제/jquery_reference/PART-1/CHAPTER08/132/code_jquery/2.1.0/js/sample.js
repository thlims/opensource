$(function(){
  // document에 mousemove 이벤트를 할당한다
  $(document).mousemove(function(evt){
    // 현재 모니터 화면에서의 마우스 좌표 취득
    var mouseX = evt.originalEvent.screenX;
    var mouseY = evt.originalEvent.screenY;
    var eType = evt.type;
    $("output:first").text(eType +" : "+mouseX+", "+mouseY);
  });
});