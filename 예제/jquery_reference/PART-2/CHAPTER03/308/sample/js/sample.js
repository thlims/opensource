$(function(){
  // vfx 클래스 요소가 클릭된 경우의 처리
  $(".vfx").click(function(){
    // scale 효과를 실행한다
    $(this).toggle("scale").text("효과 처리 중...");
    // 3초(3000msec) 후에 다시 scale 효과를 실행한다
    (function(obj){
      setTimeout(function(){
        // scale 효과를 실행한다
        $(obj).toggle("scale", {
          // 스케일 비율을 지정한다
          percent : 300,
          // 스케일 방법
          scale : "box",
          // 스케일 기준 위치
          origin : ["top", "left"],
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