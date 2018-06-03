$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $(":button:eq(0)").click(function(){
    // img 요소의 src 프로퍼티 읽기
    var url = $("#myPhoto").prop("src");
    // 읽은 내용 표시
    alert(url);
  });
  // 두 번째 버튼에 이벤트 할당
  $(":button:eq(1)").click(function(){
    // img 요소의 src 프로퍼티 설정
    $("#myPhoto").prop("src", "images/1.jpg");
  });
});