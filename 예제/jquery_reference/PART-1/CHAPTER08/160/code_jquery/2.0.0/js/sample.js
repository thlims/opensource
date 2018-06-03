$(function(){
  // form 요소에 submit 이벤트를 할당한다
  $("form").submit(function(event){
    // 전송 전에 경고 다이얼로그를 표시한다
    alert("전송합니다");
  });
});