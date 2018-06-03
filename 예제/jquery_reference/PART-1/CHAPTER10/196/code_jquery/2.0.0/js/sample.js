$(function(){
  // 같은 도메인 서버에 있는 data.json 파일을 읽는다
  $.getJSON("./data.json")
    // 비동기 처리가 resolve[성공] 상태의 경우
    .done(function(data, status, jqXHR){
      // JSON 데이터에서 각 속성 값을 읽고 표시한다
      var year = data.year;
      var month = data.month;
      var name = data.name
      $("output:first").text("읽어 들인 데이터："+year+"년"+month+"월　"+name);
      // 성공을 알리는 문자를 화면에 표시한다
      var htmlStr = $("output:first").html();
      $("output:first").html(htmlStr+"<br>처리가 성공적으로 종료했습니다.(resolve)");
    })
});
