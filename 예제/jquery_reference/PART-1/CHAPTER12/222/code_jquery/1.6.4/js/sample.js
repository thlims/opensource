$(function(){
  // 버튼에 click 이벤트 할당
  $(":button").click(function(){
    // 배열 1
    var ary1 = ["(주)", "교"];
    // 배열 2
    var ary2 = ["학", "사"];
    // 두 개의 배열 연결 
    var ary = $.merge(ary1, ary2);
    // 결과 표시
    $("output:eq(0)").html("요소 수："+ary.length+"<br>내  용："+ary.join());
  });
});