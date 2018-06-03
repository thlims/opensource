$(function(){
  // 대화상자를 생성한다
  $("#message").dialog({
    // 가로 폭을 지정한다
    width : 500,
    // 세로 폭을 지정한다
    height: 200,
    // 최소 가로 폭을 지정한다
    minWidth : 100,
    // 최소 세로 폭을 설정한다
    minHeight : 80,
    // 최대 가로 폭을 지정한다
    maxWidth : 600,
    // 최대 세로 폭을 지정한다
    maxHeight : 400
  });
});