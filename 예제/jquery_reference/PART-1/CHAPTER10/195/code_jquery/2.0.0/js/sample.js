$(function(){
  // 같은 도메인 서버에 있는 data.json 파일을 읽는다
  $.getJSON("./data.json")
    //비동기 처리가 완료（resolve[성공] 또는 reject[실패]）한 경우
    .always(function(){
      // 완료를 알리는 문자를 표면에 표시한다
      var htmlStr = $("output:first").html();
      $("output:first").html(htmlStr+"<br>처리가 완료되었습니다.(resolve/reject)");
    });
});
