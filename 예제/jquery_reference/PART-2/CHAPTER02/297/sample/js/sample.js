$(function(){
  // jQuery UI의 선택 메뉴를 설치한다
  $("#mySelectMenu").selectmenu();
  // 버튼으로 click 이벤트를 할당한다
  $("#destroyMenu").click(function(){
    // 메뉴를 삭제한다
    $("#mySelectMenu").selectmenu("destroy");
  });
});