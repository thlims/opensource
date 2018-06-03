$(function(){
  // 버튼에 click 이벤트 할당
  $("#check").click(function(){
    // 문자열의 경우. 결과는 string
    var type1 = $.type("교학사");
    // null의 경우. 결과는 null
    var type2 = $.type(null);
    // 배열의 경우. 결과는 array
    var type3 = $.type([1,2,3]);
    // 결과를 화면에 표시한다
    $("output:eq(0)").text(type1+", "+type2+", "+type3);
  });
});