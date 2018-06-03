$(function(){
  // 탭 기능을 설정한다
  $("#mashroom").tabs({
    // 활성화할 탭 번호를 지정한다. 세 번째 탭이 활성화된다.
    active: 2
  });
  // 버튼에 click 이벤트를 할당한다
  $("#set2").click(function(){
    // 두 번째 탭을 활성화한다
    $("#mashroom").tabs("option", "active", 1);
  });
});