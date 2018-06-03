// 페이지의 읽기가 끝났으면 처리한다
$(document).ready(function(){
  // 페이지의 HTML 텍스트 읽기
  var htmlText = $("#result").html();
  // 읽기 완료 메시지를 표시한다
  $("#result").html(htmlText+"페이지 읽기 완료"+"<br>");
  // 이미지에 load 이벤트를 할당한다
  $("img").bind("load", function(){
    // 이미지 alt 속성 읽기
    var altText = this.alt;
    // 페이지의 HTML 텍스트 읽기
    var htmlText = $("#result").html();
    // 읽기 완료 메시지를 표시한다
    $("#result").html(htmlText+"읽기 완료："+altText+"<br>");
  });
});