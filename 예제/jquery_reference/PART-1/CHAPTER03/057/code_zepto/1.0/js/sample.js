$(function(){
  // 200msec마다 처리한다
  setInterval(function(){
    // 포커스된 요소 내용을 표시한다
    $("output:first").text($(":focus").val());    
  }, 200);
});