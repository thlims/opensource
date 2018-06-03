$(function(){
  // #base를 기준으로 div 요소에 click 이벤트를 할당한다
  $("#base").on("click", "div", function(evt){
    // 현재 시간 취득
    var time = (new Date()).getTime();
    // 이벤트를 받은 부모(위임) 요소를 얻는다
    var tagDele = evt.delegateTarget;
    // 실제 이벤트가 발생한 요소를 얻는다
    var tagTarget = evt.target;
    // delegateTarget 요소를 표시한다
    $("#result").html("delegate："+tagDele.id+"<br>target : "+
      tagTarget.id+"<br>시간："+time);
  });
});