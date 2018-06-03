$(function(){
  // 첫 번째 div 요소를 클릭했을 때 처리
  $("div:eq(0)").click(function(){
    // CSS 클래스의 ef3를 전환한다
    $(this).toggleClass("ef3");
  });
  // 두 번째 div 요소를 클릭했을 때 처리
  $("div:eq(1)").click(function(){
    // CSS 클래스 ef3를 전환한다. 3초 easeOutExpo 동작으로 처리
    $(this).toggleClass("ef3", 3*1000, "easeOutExpo");
  });
  // 세 번째 div 요소를 클릭했을 때 처리
  $("div:eq(2)").click(function(){
    // CSS 클래스를 전환한다
    $(this).toggleClass("ef3",
      // false를 지정해서 CSS 클래스 ef3를 삭제한다. true이면 추가
      false, {
          // 4초 동안 효과 처리를 실행한다
          duration : 4 * 1000,
          // 동작은 리니아(직선)로 한다
          easing : "linear",
          // 효과 처리가 끝나면 메시지를 표시한다
          complete : function(){
            $(this).text("효과 처리 완료");
          }
        }
    );
  });
});