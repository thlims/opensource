$(function(){
  // 탭 기능을 설정한다
  $("#mashroom").tabs({
    // 두 번째 탭 번호를 무효로 한다
    disabled: [1]
  });
  // 탭에 click 이벤트를 할당한다
  $("#disAll").click(function(){
    // 모든 탭을 무효로 한다
    $("#mashroom").tabs("option", "disabled", true);
  });
  // 탭에 click 이벤트를 할당한다
  $("#enaAll").click(function(){
    // 모든 탭을 유효로 한다
    $("#mashroom").tabs("option", "disabled", false);
  });
  // 버튼에 click 이벤트를 할당한다
  $("#dispart").click(function(){
    // 첫 번째와 마지막 탭을 무효로 한다
    $("#mashroom").tabs("option", "disabled", [0, 2]);
  });
});