$(function(){
  // a 요소를 그래픽 버튼으로 한다
  $("a:eq(0)").button({
    // 버튼 문자를 설정한다
    label: "검객"
  });
  $("a:eq(1)").button({ label: "마법사" });
  $("a:eq(2)").button({ label: "상인" });
  // 아이콘 변경 버튼에 click 이벤트를 할당한다
  $("#change").click(function(){
    $("a:eq(0)").button("option", "label", "파이터" );
  });
});