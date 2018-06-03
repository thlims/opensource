$(function(){
  // 변환 버튼에 이벤트를 할당한다
  $("#btn").click(function(){
    // 텍스트 영역으로부터 데이터 읽기
    var textData = $("#myContent").val();
    // JSON으로 변환한다. 잘못된 값이 있으면 에러가 되므로 주의
    try {
      var jsonData = $.parseJSON(textData);
    }catch(e){
      var jsonData = null;
      }
    // 결과를 표시한다
    if (jsonData === null){
      jsonData = "JSON 데이터가 올바르지 않습니다";
    }else{
      jsonData = $.param(jsonData);
    }
    $("#result").text(jsonData);
  });
});
