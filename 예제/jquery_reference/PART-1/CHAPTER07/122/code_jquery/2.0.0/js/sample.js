$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $("#btn1").click(function(){
    // div 요소 스크롤 바의 위치(상하 스크롤 바) 읽기
    var y = $("#memo").scrollTop();
    alert("세로 스크롤 바 위치："+y);
  });
  // 두 번째 버튼에 이벤트 할당
  $("#btn2").click(function(){
    // div 요소 스크롤 바의 위치(상하 스크롤 바) 읽기
    $("#memo").scrollTop(20);
  });
});