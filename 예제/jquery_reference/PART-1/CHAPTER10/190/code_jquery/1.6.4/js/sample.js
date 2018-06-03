$(function(){
  // 같은 디렉토리에 있는 data.txt 파일을 읽는다
  $("output:first").load("data.txt");
  // 읽기 성공시에 경고 다이얼로그를 표시한다
  $(document).ajaxSuccess(function(evt, xhr, opt){
    alert("읽기에 성공했습니다");
    // 읽어들인 데이터를 경고 다이얼로그에 표시한다
    alert(xhr.responseText);
  });
});