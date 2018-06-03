$(function(){
  // 쓰기 버튼에 이벤트를 할당한다
  $(":button:eq(0)").click(function(){
    // 텍스트 필드로부터 데이터 읽기
    var fieldData = $("#myContent").val();
    // h1 요소에 복수의 키와 값으로 데이터를 저장한다
    $("h1:first").data({
      "uID" : 5963,
      "myData" : fieldData,
    });
    // 결과를 표시한다
    $("output:first").text("저장했습니다");
  });
  // 읽기 버튼 (uID)에 이벤트를 할당한다
  $(":button:eq(1)").click(function(){
    // h1 요소에서 uID로 된 키 이름의 데이터를 읽는다
    var readData = $("h1:first").data("uID");
    // 결과를 표시한다
    $("output:first").html("uID 데이터를 읽었습니다<br>"+readData);
  });
  // 읽기 버튼(myData)에 이벤트를 할당한다
  $(":button:eq(2)").click(function(){
    // h1 요소에서 myData로 된 키 이름의 데이터를 읽는다
    var readData = $("h1:first").data("myData");
    // 결과를 표시한다
    $("output:first").html("myData 데이터를 읽었습니다<br>"+readData);
  });
  // 데이터 삭제 버튼에 이벤트를 할당한다
  $(":button:eq(3)").click(function(){
    // h1 요소에서 myData로 된 키 이름의 데이터를 삭제한다
    $("h1:first").removeData("myData");
    // 결과를 표시한다
    $("output:first").html("키 이름 myData 데이터를 삭제했습니다");
  });
  // 모든 데이터 삭제 버튼에 이벤트를 할당한다
  $(":button:eq(4)").click(function(){
    // 모든 데이터 삭제 버튼에 이벤트를 할당한다
    $("h1:first").removeData();
    // 결과를 표시한다
    $("output:first").html("모든 데이터를 삭제했습니다");
  });
});