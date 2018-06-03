$(function(){
  // 1〜2번째 요소를 클릭했을 때 처리. CSS 클래스의 ef2를 삭제한다
  $("div:eq(0), div:eq(1)").click(function(){
    // ef2 클래스 삭제. 5초 easeOutExpo 동작으로 처리
    $(this).removeClass("ef2", 5*1000, "easeOutExpo");
  });
  // 3〜4번째 요소를 클릭했을 때 처리. CSS 클래스의 ef1〜3을 삭제한다
  $("div:eq(2), div:eq(3)").click(function(){
    // ef1〜3 클래스 삭제
    $(this).removeClass("ef1 ef2 ef3", {
      // 효과에 걸리는 시간을 지정한다
      duration : 7*1000,
      // 효과의 동작을 나타내는 문지열을 지정한다
      easing: "linear",
      // 효과 완료시의 처리를 지정한다
      complete: function(){
        // 내용을 종료 메시지로 바꾼다
        $(this).text("효과 처리 완료");
      }
    });
  });
});