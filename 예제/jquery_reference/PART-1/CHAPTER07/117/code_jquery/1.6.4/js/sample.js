$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $("#readCSS").click(function(){
    // h1 요소의 너비를 읽고 경고 창에 표시
    alert($("#myHeader").css("width"));
  });
  // 두 번째 버튼에 이벤트 할당
  $("#setCSS").click(function(){
    // h1 요소의 너비를 320px로 설정
    $("#myHeader").css("width", "320px");
  });
});