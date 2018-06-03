$(function(){
  // 첫 번째 div 요소를 클릭했을 때의 처리
  $("div:eq(0)").click(function(){
    // CSS 클래스의 ef1를 삭제,  ef2를 추가한다
    $(this).switchClass("ef2", "ef1");
  });
  // 두 번째 div 요소를 클릭했을 때의 처리
  $("div:eq(1)").click(function(){
    // CSS 클래스의 ef1를 삭제, ef2를 추가한다
    $(this).switchClass("ef2", "ef1", {
      // 효과에 걸리는 시간을 지정한다
      duration : 7*1000,
      // 효과의 동작을 나타내는 문자열을 지정한다
      easing: "linear",
      // 효과 완료시의 처리를 지정한다
      complete: function(){
        // 내용을 종료 메시지로 바꾼다
        $(this).text("효과 처리 완료");
      }
    });
  });
});