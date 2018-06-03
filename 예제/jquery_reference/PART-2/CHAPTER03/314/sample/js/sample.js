$(function(){
  // 문서를 클릭하면 효과와 함께 표시한다
  $(document).click(function(){
    // 첫 번째 div 요소를 blind 효과로 표시한다
    $("div:eq(0)").show("blind");
    // 두 번째 div 요소를 slide 효과로 표시한다
    $("div:eq(1)").show("slide", {
      // 효과에 걸리는 시간을 지정한다 
      duration : 2*1000,
      // 효과의 동작을 나타내는 문자열을 지정한다
      easing: "linear",
      // 효과 완료시 처리를 지정한다
      complete: function(){
        $(this).text("효과 종료");
      }
    });
  });
});