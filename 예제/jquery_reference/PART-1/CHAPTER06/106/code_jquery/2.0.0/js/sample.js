$(function(){
  $(":button").click(function(){
    // 첫 번째 output 요소 내용을 텍스트로 읽기
    var content = $("output:first").text();
    // 랜덤 값 추가
    content = content + Math.random() + ", ";
    // output 요소에 텍스트로 출력
    $("output:first").text(content);
  });
});