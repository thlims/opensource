$(function(){
  // 페이지 안쪽을 클릭하면 달력을 표시한다.
  $("body").click(function(){
    // 달력을 표시한다
	$.datepicker.setDefaults($.datepicker.regional['ko']);
    $(this).datepicker(
      // 대화상자료 표시한다
      "dialog",
      // 2035년9월2일로 한다
      "2020/9/2",
      // 날짜가 선택되었을 때 호출하는 함수(이벤트 핸들러)
      function(date){
        $("#result").text("선택한 날짜는"+date+"입니다.");
      },
      // 옵션（특별히 지정하지 않는다）
      { },
      // 대화상자 표시 좌표를 (20, 120)으로 설정한다
      [20, 120]
    );
  });
});