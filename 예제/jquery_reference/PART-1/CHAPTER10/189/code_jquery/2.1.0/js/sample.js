$(function(){
  // 비동기 통신 처리 시작시 메시지를 표시한다
  $(document).ajaxStart(function(evt, xhr, opt){
    $("output:eq(1)").html("읽기 시작<br>");
  });
  // 비동기 통신 처리 정지시 메시지를 표시한다
  $(document).ajaxStop(function(evt, xhr, opt){
    var html = $("output:eq(1)").html();
    $("output:eq(1)").html(html+"읽기 종료");
  });
  // 같은 디렉토리에 있는 data.txt 파일을 읽는다
  $("output:first").load("data.txt");
});