$(function(){
  // 대화상자를 표시한다
  $("#message").dialog({
    // 대화상자가 드래그 시작시 발생하는 dragStart 이벤트 처리
    dragStart : function(evt, ui){
      // 대화상자 좌표를 표시한다
      $("#ddStart").text(evt.clientX+", "+evt.clientY);
    },
    // 대화상자가 드래그 중에 발생하는 drag 이벤트 처리
    drag : function(evt, ui){
      // 대화상자 좌표를 표시한다
      $("#dd").text(evt.clientX+", "+evt.clientY);
    },
    // 대화상자 드래그가 끝난 경우에 발생하는 dragEnd 이벤트 처리
    dragStop : function(evt, ui){
      // 대화상자 좌표를 표시한다
      $("#ddEnd").text(evt.clientX+", "+evt.clientY);
    }
  });
});