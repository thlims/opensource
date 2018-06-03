$(function(){
  // a 요소를 그래픽 버튼으로 한다
  $("a").button({
    icons: {
      // 버튼의 첫 아이콘을 지정한다
      primary: "ui-icon-image"
    },
    text: false
  });
  // 버튼에 click 이벤트를 할당한다
  $("#change").click(function(){
    $("a:eq(0)").button("option", "text", true );
  });
});