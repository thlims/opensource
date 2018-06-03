$(function(){
  // vfx 클래스 요소가 클릭된 경우의 처리
  $(".vfx").click(function(){
    // 퍼프 효과를 실행한다
    $(this).toggle("puff").text("효과 처리 중...");
    // 3초(3000msec) 후에 다시 puff 효과를 실행한다
    (function(obj){
      setTimeout(function(){
        // puff 효과를 실행한다
        $(obj).toggle("puff", {
          // 확대 비율을 지정한다(300%로 한다)
          percent : 300,
          // 효과에 걸리는 시간을 지정한다
          duration : 2000,
          // 효과 종료시 처리를 지정한다
          complete: function(){
            // 내용을 종료 메시지로 바꾼다
            $(obj).text("효과 종료");
          }
        });
      }, 3000);
    })(this);
  });
});