$(function(){
  // 버튼에 click 이벤트 할당
  $(":button").click(function(){
    // 배열 작성
    var data = [40, -61, 40, 90, 50, -91, 60, -31];
    // 양수만 호출한다
    var posi = $.map(data, function(value, index){
      // 음수는 null을 지정하여 추가되지 않게 한다
      if (value < 0) { return null; }
      // 호출한 양수(또는 0)는 그대로 반환하면 배열에 추가된다
      return value;
    });
    // 결과 표시
    $("output:eq(0)").text(posi.toString());
  });
});