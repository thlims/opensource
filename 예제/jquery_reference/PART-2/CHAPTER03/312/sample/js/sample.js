$(function(){
  //  vfx 클래스 요소가 클릭된 경우의 처리
  $(".vfx").click(function(){
    // 처리 중 메시지를 표시한다
    $(this).text("효과 처리 중...")
    // transfer 효과를 실행한다
    $(this).effect("transfer", { to : $("#fit"),
      // 효과 완료시 처리를 지정한다
      complete: function(){
        // 내용을 종료 메시지로 바꾼다
        $(this).text("효과 종료");
      }
     }, 2000);
  });
});