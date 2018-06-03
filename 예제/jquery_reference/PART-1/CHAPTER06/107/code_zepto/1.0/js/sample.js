$(function(){
  $("#btn").click(function(){
    // 첫 번째 output 요소 내용을 HTML로 읽기
    var content = $("#result").html();
    // 랜덤 값 추가
    content = content + "<p>"+Math.random()+"</p>";
    //  output 요소에 HTML로 출력
    $("#result").html(content);
  });
});