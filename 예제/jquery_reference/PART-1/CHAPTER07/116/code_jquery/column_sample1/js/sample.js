$(function(){
  // 버튼에 이벤트 할당
  $("#btn").click(function(){
    // h1 요소 caution 클래스의 ON/OFF를 바꾼다
    $("h1").toggleClass("caution note");
  });
});