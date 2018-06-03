$(function(){
  // 읽을 JavaScript 파일 URL
  var url = "http://footage3.openspc2.org/js/myFunc.js";
  // footage3 서버에 있는 JavaScript 파일을 읽는다
  $.getScript(url, function(script, status, jqXHR){
    // 읽어들인 스크립트에 기술되어 있는 함수를 호출한다
    outputMessage("정상적으로 처리되었습니다!!");
  });
});