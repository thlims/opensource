$(function(){
  // 첫 번째 버튼에 click 이벤트를 할당한다
  $("#readAttr").click(function(){
    // img 요소 alt 속성을 읽고 표시한다
    var altText = $("#myPhoto").attr("alt");
    $("#result").text(altText);
  });
  // 두 번째 버튼에 click 이벤트를 할당한다
  $("#setAttr").click(function(){
    // img 요소 title 속성에 문자를 설정한다
    $("#myPhoto").attr("title", "국보이다");
  });
});