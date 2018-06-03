$(function(){
  // 같은 디렉토리에 있는 data.txt 파일을 읽는다
  $("#result").load("data.txt");
  // 비동기 통신 처리 완료시 경고 다이얼로그를 표시한다
  $(document).ajaxComplete(function(evt, xhr, opt){
    alert("비동기통신 처리를 완료했습니다");
  });
});