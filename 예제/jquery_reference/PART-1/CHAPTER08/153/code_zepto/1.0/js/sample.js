$(function(){
  // 이미지에 mousemove 이벤트를 할당한다
  $("#photo1").mousemove(function(evt){
    // 현재 마우스 좌표 취득
    var mouseX = evt.pageX;
    var mouseY = evt.pageY;
    var eType = evt.type;
    $("#result").text(eType +" : "+mouseX+", "+mouseY);
  });
});