// 글로벌 변수에 수를 대입한다
var num = 123;
$(function(){
  // 결과를 입력할 변수 준비
  var result = "";
  // 로컬 변수에 456을 대입한다
  var num = 456;
  // 이 eval()은 로컬 컨텍스트이므로 456이 표시된다
  var n = eval("alert(num)");
  // 글로벌 eval()이므로 글로벌 변수 값 123이 표시된다
  var n = $.globalEval("alert(num)");
});
