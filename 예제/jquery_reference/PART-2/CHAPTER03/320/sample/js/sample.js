$(function(){
  // div 요소를 클릭했을 때 처리
  $("div").click(function(){
    // 효과를 교대로 전환한다
    $(this).toggle("slide");
    // 3초(3000msec) 후에 slide 효과를 실행한다
    (function(obj){
      setTimeout(function(){
        // slide 효과를 실행한다
        $(obj).toggle("slide");
      }, 3000);
    })(this);
  });
});