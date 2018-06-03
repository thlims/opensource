$(function(){
  // 대화상자를 표시한다
  $("#message").dialog({
    // 대화상자가 크기 조절 시작시 발생하는 resizeStart 이벤트 처리
    resizeStart : function(evt, ui){
      // 대화상자 너비를 표시한다
      $("#rsStart").text(ui.size.width+", "+ui.size.height);
    },
    // 대화상자가 크기 조절 중에 발생하는 resize 이벤트 처리
    resize : function(evt, ui){
      // 대화상자 너비를 표시한다
      $("#rs").text(ui.size.width+", "+ui.size.height);
    },
    // 대화상자 크기 조절이 끝난 경우에 발생하는 resizeStop 이벤트 처리
    resizeStop : function(evt, ui){
      // 대화상자 폭을 표시한다
      $("#rsEnd").text(ui.size.width+", "+ui.size.height);
    }
  });
});