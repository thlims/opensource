$(function(){
  // 달력을 표시하여 선택할 수 있도록 한다
  $.datepicker.setDefaults($.datepicker.regional['ko']);
  $(".checkdate").datepicker({
    // 3일 전부터 선택하도록 한다.
    minDate : -3,
    // 오늘부터 1주일에 3일을 더해서 선택한다. +10을 해도 동일
    maxDate : "+1w +3d",
    // 이하는 일요일부터 표시를 시작하고, 요일 달이름 표시 설정
    firstDay : 0,
    dayNamesMin : ["일", "월", "화", "수", "목", "금", "톡"],
    monthNames : ["1월", "2월", "3월", "4월", "5월", "6월",
                  "7월", "8월", "9월", "10월", "11월", "12월"]
  });
});