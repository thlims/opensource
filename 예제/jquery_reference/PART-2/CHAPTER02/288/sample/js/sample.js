$(function(){
  // 탭 기능을 설정한다
  $("#mashroom").tabs();
  // 버튼에 click 이벤트를 할당한다
  $("#deleteTab").click(function(){
    // 탭 그 자체를 삭제한다
    $("#mashroom").tabs("destroy");
  });
});