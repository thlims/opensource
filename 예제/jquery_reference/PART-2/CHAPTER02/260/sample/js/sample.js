$(function(){
  // 대화상자를 생성한다
  $("#message").dialog({
    // 위치를 지정한다
    position : {
      // 대화상자 왼쪽 위를 기준으로 한다
      my : "left top",
      // 왼쪽에서 10px, 위에서 50px로 배치한다
      at : "left+30 top+80"
    }
  });
});