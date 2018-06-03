$(function(){
  $(document).bind("click", function(evt){
    // 클릭시 부모 요소 tr에 있는 th 요소의 문자를 읽는다
    var month = $(evt.target).closest("tr").find("th").text();
    // 클릭된 행의 달을 표시한다
    $("#result").text(month+"의 매출입니다");
  });
});