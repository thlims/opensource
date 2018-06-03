$(function(){
  // 비동기 옵션을 필터링한다
  $.ajaxPrefilter(function( options, originalOptions, jqXHR ){
    // success 옵션이 있는 경우 동작을 추가 변경한다
    if ( options.success ){
      alert("읽기 성공");
    }
  });
  // 같은 디렉토리에 있는 data.txt 파일을 읽는다
  $.ajax("data.txt", {
    async : true,
    success : function(data, status, jqXHR){
      $("#result").text("읽어들인 데이터："+data);
    }
  });
});