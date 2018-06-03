$(function(){
  // 같은 디렉토리에 있는 data.txt 파일을 get 메소드로 읽는다
  $.get("data.txt", function(data, status, jqXHR){
    $("#result").text("읽어들인 데이터："+data);
  });
});