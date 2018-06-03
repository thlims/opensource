$(function(){
  // 대화상자를 표시한다
  $("#message").dialog({
    // 대화상자가 표시된 경우에 발생하는 open 이벤트 처리
    open : function(evt, ui){
      // 현재 시각을 실시간으로 표시한다
      var dateObj = new Date();
      var h = ("0"+dateObj.getHours()).slice(-2);
      var m = ("0"+dateObj.getMinutes()).slice(-2);
      var s = ("0"+dateObj.getSeconds()).slice(-2);
      $("#message").html(h+":"+m+":"+s);
      // 1초마다 반복한다
      setTimeout(arguments.callee, 1000);
    }
  });
});