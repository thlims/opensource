$(function(){
  // 버튼에 이벤트 할당
  $("#btn").click(function(){
    // img 요소의 onclick 속성 삭제
    $("#myPhoto").removeAttr("onclick");
  });
});