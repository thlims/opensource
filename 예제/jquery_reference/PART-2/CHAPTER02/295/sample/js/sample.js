$(function(){
  // jQuery UI의 선택 메뉴를 설치한다
  var menu = $("#mySelectMenu").selectmenu();
  // 버튼에 click 이벤트를 할당한다
  $("#disableMenu").click(function(){
    // 선택 메뉴를 무효로 한다
    $("#mySelectMenu").selectmenu("option", "disabled", true);
  });
  // 버튼에 click 이벤트를 할당한다
  $("#enableMenu").click(function(){
    // 선택 메뉴를 유효로 한다
    $("#mySelectMenu").selectmenu("option", "disabled", false);
  });
});