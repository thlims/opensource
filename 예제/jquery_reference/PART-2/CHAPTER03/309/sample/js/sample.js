$(function(){
  // vfx 클래스 요소가 클릭된 경우의 처리
  $(".vfx").click(function(){
    // shake 효과를 실행한다
    $(this).toggle("shake").text("효과 처리 중...");
    // 3초(3000msec) 후에 다시 shake 효과를 실행한다
    (function(obj){
      setTimeout(function(){
        // shake 효과를 실행한다
        $(obj).toggle("shake", {
          // 방향을 지정한다
          direction : "down",
          // 거리
          distance : 40,
          //횟수
          times : 6,
          // 효과에 걸리는 시간을 지정한다
          duration : 2000,
          // 효과 완료시 처리를 지정한다
          complete: function(){
            // 내용을 종료 메시지로 바꾼다
            $(obj).text("효과 종료");
          }
        });
      }, 3000);
    })(this);
  });
});