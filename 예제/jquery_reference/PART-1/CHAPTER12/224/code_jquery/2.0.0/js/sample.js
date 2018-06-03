$(function(){
  // 쓰기 버튼에 이벤트 할당
  $(":button:eq(0)").click(function(){
    // 텍스트 필드로부터 데이터 읽기
    var fieldData = $("#myContent").val();
    // h1 요소에 myData 키 이름으로 텍스트 필드 데이터를 저장한다
    $("h1:first").data("myData", fieldData);
    // 결과를 표시한다
    $("output:first").text("저장했습니다");
  });
  // 읽기 버튼에 이벤트를 할당한다
  $(":button:eq(1)").click(function(){
    // h1 요소에서 myData 키 이름 데이터를 읽는다
    var readData = $("h1:first").data("myData");
    // 결과를 표시한다
    $("output:first").html("이하 데이터를 읽었습니다<br>"+readData);
  });
});