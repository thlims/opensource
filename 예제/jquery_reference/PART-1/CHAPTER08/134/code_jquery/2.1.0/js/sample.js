$(function(){
  // input 요소에 keydown 이벤트를 할당한다
  $("input").keydown(function(evt){
    // 키 번호를 얻는다
    var keyNumber = evt.which;
    // 키 번호를 표시한다
    $("output:first").text("키 번호："+keyNumber);
  });
  // input 요소에 click 이벤트를 할당한다
  $("input").click(function(evt){
    // 버튼 번호를 얻는다
    var buttonNumber = evt.which;
    // 키 번호를 표시한다
    $("output:first").text("버튼 번호："+buttonNumber);
  });
});