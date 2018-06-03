$(function(){
  // 리퀘스트 전송시에 경고 다이얼로그를 표시한다
  $(document).ajaxSend(function(evt, xhr, opt){
    alert("서버에 리퀘스트를 전송했습니다");
  });
  // 같은 디렉토리에 있는 data.txt 파일을 읽는다
  $("output:first").load("data.txt");
});