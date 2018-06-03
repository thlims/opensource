$(function(){
  // 첫 번째 a 요소에 click 이벤트를 할당한다
  $("#myLink1").click(function(evt){
    // 클릭되었다면 경고 다이얼로그 표시
    alert("이벤트 발생1");
    // 브라우저 기본 동작 금지
    evt.preventDefault();
  });
  // 두 번째 요소에 click 이벤트를 할당한다
  $("#myLink2").click(function(evt){
    // 클릭되었다면 경고 다이얼로그 표시
    alert("이벤트 발생2");
  });
});