$(function(){
  // a 요소에 click 이벤트를 할당한다
  $("a").click(function(evt){
    // 현재 금지 상태 취득
    var flag = evt.isDefaultPrevented();
    // 상태를 나타내는 경고 다이얼로그 표시
    alert("preventDefault()실행 전："+flag);
    // 브라우저의 기본 동작 금지
    evt.preventDefault();
    // 현재 금지 상태 취득
    flag = evt.isDefaultPrevented();
    // 상태를 나타내는 경고 다이얼로그 표시
    alert("preventDefault()실행 후："+flag);
  });
});