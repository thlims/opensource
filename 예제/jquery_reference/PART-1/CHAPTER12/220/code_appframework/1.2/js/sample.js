$(function(){
  // 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // 목록의 li 요소 읽기
    var base = document.getElementById("price");
    var li = base.getElementsByTagName("li");
    // li 요소를 배열로 변환한다
    var priceData = $.makeArray(li);
    // 배열 수만 반복하여 읽고 맨 뒤에 원 문자를 추가한다
    for(var i=0, text=""; i<priceData.length; i++){
      text = text + $(priceData[i]).text() + "원<br>";
    }
    // 결과 표시
    $("#result").html(text);
  });
});