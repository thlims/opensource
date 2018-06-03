$(function(){
  // vfx 클래스 요소가 클릭된 경우의 처리
  $(".vfx").click(function(){
    // bounce 효과를 실행한다
    $(this).toggle("bounce").text("이펙트 처리 중...");
    // 3초(3000msec) 후에 다시 bounce 효과를 실행한다
    (function(obj){
      setTimeout(function(){
        // bounce 효과를 실행한다
        $(obj).toggle("bounce", {
          // 거리를 지정한다
          distance : 70,
          // 바운스 횟수를 지정한다
          times : 2,
          // 이펙트에 걸리는 시간을 지정한다
          duration : 2000,
          // 이펙트 종료시 처리를 지정한다
          complete: function(){
            // 내용을 종료 메시지로 바꾼다
            $(obj).text("이펙트 종료");
          }
        });
      }, 3000);
    })(this);
  });
});