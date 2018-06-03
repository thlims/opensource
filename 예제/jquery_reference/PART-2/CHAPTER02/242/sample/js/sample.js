$(function(){
  // 아코디언 기능을 설정한다
  $("#mashroom").accordion({
    // 패널 헤더가 활성화된 경우 처리한다
    activate: function( event, ui ) {
      // 결과를 표시한다
      $("#result").html(
        // 활성화된 헤더 문자 표시
        "새 헤더ー："+ui.newHeader.text()+"<br>"+
        // 이전 활성화된 헤더 문자 표시
        "이전 헤더："+ui.oldHeader.text()  
      );
    }
  });
});