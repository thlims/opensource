$(function(){
  // 같은 디렉토리에 있는 data.txt 파일을 읽는다
  $.ajax("data.txt", {
    async : true,
    cache : false,
    success : function(data, status, jqXHR){
      $("#result").text("읽어온 데이터："+data);
    }
  });
});