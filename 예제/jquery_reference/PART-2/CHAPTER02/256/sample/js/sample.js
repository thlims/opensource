$(function(){
  // 달력을 표시하여 선택할 수 있게 한다
   $.datepicker.setDefaults($.datepicker.regional['ko']);
  $(".selectdate").datepicker({
  });
});