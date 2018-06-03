$(function(){
  // 텅빈 오브젝트 생성 테스트 결과 대입
  var a = { }
  var flag1 = $.isEmptyObject(a);
  // 오브젝트 생성 테스트 결과 대입
  var b = new Object(123);
  var flag2 = $.isEmptyObject(b);
  // 내용 있는 오브젝트 생성 테스트 결과 대입
  var c = { pi : 3.14, e : 2.71 };
  var flag3 = $.isEmptyObject(c);
  // 텅빈 배열 생성 테스트 결과 대입
  var d = [ ];
  var flag4 = $.isEmptyObject(d);
  // 내용 있는 오브젝트 생성 테스트 결과 대입
  var e = { };
  e.pi = 3.14;
  var flag5 = $.isEmptyObject(e);
  // 결과 출력
  $("#result").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3+
    "<br>d："+flag4+"<br>e："+flag5);
});