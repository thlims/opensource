$(function(){
  // 버튼에 click 이벤트 할당
  $(":button").click(function(){
    // 배열 작성
    var data = [40, -61, 40, 90, 50, -91, 60, -31];
    // 양수만 호출한다
    var posi = $.grep(data, function(value, index){
      // 음수는 false를 지정하여 배열에 남지 않게 한다
      if (value < 0) { return false; }
      // true를 반환하면 요소는 배열에 남는다
      return true;
    }, false);
    // 결과 표시
    $("output:eq(0)").text(posi.toString());
  });
});