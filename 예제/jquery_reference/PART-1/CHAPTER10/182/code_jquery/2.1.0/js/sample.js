$(function(){
  // 비동기 통신시 옵션을 설정한다
  $.ajaxSetup({
    async : true,
    complete : function(){
      alert("읽기 완료");
    }
  });
  // 같은 디렉토리 안에 있는 data.txt 파일을 읽는다
  $.ajax("data.txt", {
    success : function(data, status, jqXHR){
      $("output:first").text("읽어들인 데이터："+data);
    }
  });
});