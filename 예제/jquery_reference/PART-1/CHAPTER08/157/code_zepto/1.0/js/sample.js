$(function(){
  // input 요소에 focus 이벤트를 할당한다
  $("input").focus(function(event){
    // 포커스한 요소의 value 속성 표시
    $("#result").text(event.currentTarget.value);
  });
});