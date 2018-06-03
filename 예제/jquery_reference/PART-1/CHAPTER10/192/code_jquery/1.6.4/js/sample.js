$(function(){
  // 같은 디렉토리에 있는 data.txt 파일을 읽는다(존재하지 않는다)
  $("output:first").load("data.txt");
  // 에러 발생시 경고 다이얼로그를 표시한다
  $(document).ajaxError(function(evt, xhr, opt){
    alert("읽기에 실패했습니다");
  });
});