$(function(){
  // 오브젝트 생성
  var obj = { name : "교학사", year : 1953, month : 5 };
  // 오브젝트 시리얼라이즈
  var result = $.param(obj);
  // 시리얼라이즈한 결과를 표시한다
  $("#result").text(result);
});