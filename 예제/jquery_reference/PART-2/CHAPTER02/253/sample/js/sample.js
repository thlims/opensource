$(function(){
  // a 요소를 그래픽 버튼으로 한다
  $("a").button({
    icons: {
      // 버튼 첫 아이콘을 지정한다
      primary: "ui-icon-alert" ,
      // 버튼 끝 아이콘을 지정한다
      secondary: "ui-icon-triangle-1-s"
    }
  });
  // 아이콘 변경 버튼에 click 이벤트를 할당한다
  $("#change").click(function(){
    $("a").button("option", "icons", {
      // 버튼 첫 아이콘을 열쇠 마크로 변경한다
      // 끝 아이콘은 지정하지 않아 삭제된다
      primary: "ui-icon-locked"
    });
  });
});