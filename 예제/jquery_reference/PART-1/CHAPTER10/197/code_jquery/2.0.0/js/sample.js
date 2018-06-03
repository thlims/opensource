$(function(){
  // 같은 도메인 서버에 있는 data2.json 파일을 읽는다
  $.getJSON("./data2.json")
    // 비동기 처리가 resolve[성공] 상태인 경우
    .done(function(data, status, jqXHR){
      $("output:first").html(htmlStr+"<br>처리는 성공했습니다.(resolve)");
    })
    // 비동기 처리가 reject[실패] 상태인 경우
    .fail(function(){
      var htmlStr = $("output:first").html();
      // 실패를 알리는 문자을 화면에 표시한다
      $("output:first").html(htmlStr+"<br>처리에 실패했습니다.(reject)");
    })
});
