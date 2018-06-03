$(function(){
  // 같은 디렉토리에 있는 data.txt 파일을 읽는다
  //$("#result").load("data.txt");
  // 읽기 성공시에 경고 다이얼로그를 표시한다
  $.ajax({
    type : "get",
    url : "data.txt",
    success : function(data){
      alert("읽기에 성공했습니다："+data);
    }
  });
});