$(function(){
  // 첫 번째 버튼에 이벤트를 할당한다
  $("#btn1").click(function(){
    // 첫 번째 폼 데이터를 시리얼라이즈한다
    var text = $("#myForm").serialize();
    // 시리얼라이즈한 결과를 표시한다
    $("#result").text(text);
  });
  // 두 번째 버튼에 이벤트를 할당한다
  $("#btn2").click(function(){
    // 첫 번째 폼 데이터를 시리얼라이즈 배열로 저장한다
    var textArray = $("#myForm").serializeArray();
    // 시리얼라이즈한 항목을 표시한다
    $("#result").html("시리얼라이즈한 항목 수："+textArray.length+"<br>");
    // 콘솔에도 출력한다
    console.dir(textArray);
  });
});