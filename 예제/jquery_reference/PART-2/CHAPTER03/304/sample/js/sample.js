$(function(){
  // vfx 클래스 요소가 클릭된 경우의 처리
  $(".vfx").click(function(){
    // fold 효과를 실행한다
    $(this).toggle("fold").text("효과 처리 중...");
    // 3초(3000msec) 후에 다시 fold 효과를 실행한다
    (function(obj){
      setTimeout(function(){
        // fold 효과를 실행한다
        $(obj).toggle("fold", {
          // 크기를 지정한다
          size : 10,
          // 수평 방향부터 먼저 처리하거나（toggle의 경우는 반대이다）
          horizFirst : true,
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