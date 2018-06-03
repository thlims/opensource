$(function(){
  // input 요소에 select 이벤트를 할당한다
  $("input").select(function(event){
    // 선택한 문자 범위 취득
    var selObj = window.getSelection();
    var text  = selObj.toString();
    // 문자가 선택되었음을 알린다
    $("#result").html("아래 문자가 선택되었습니다.<br>"+text);
  });
});