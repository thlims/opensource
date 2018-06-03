$(function(){
  // 첫 번째 버튼에 이벤트를 할당한다
  $("#readAttr").click(function(){
    // img 요소의 src 속성 값 읽기
    var url = $("#myPhoto").attr("src");
    // 읽은 내용을 메시지 창에 표시한다
    alert(url);
  });
  // 두 번째 버튼에 이벤트를 할당한다
  $("#setAttr").click(function(){
    // img 요소의 src 속성 값 설정
    $("#myPhoto").attr("src", "images/1.jpg");
  });
});