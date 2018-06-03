$(function(){
  // 이미지에 error 이벤트를 할당한다
  $("#gallery img").error(function(evt){
    // 읽지 못한 이미지 src 속성을 읽는다
    var url = $(this).attr("src");
    // 에러 메시지와 읽지 못한 이미지 URL 표시
    $("output").html($("output").html()+"에러："+url+"<br>");
  });
});