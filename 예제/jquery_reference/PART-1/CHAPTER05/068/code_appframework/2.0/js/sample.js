$(function(){
  // 버튼에 click 이벤트 할당
  $("#btn").click(function(){
    // 표의 td 요소 중 문자를 배열한다
    var price = $("table td").map(function(index, ele){
      // 요소를 읽고 숫자 유형으로 한다
      var price = parseInt($(ele).text());
      if (price >= 0){
        // 읽은 내용을 반환한다
        return parseFloat(price);
      }else{
        // 마이너스 값인 경우는 배열에 포함하지 않도록 null을 반환한다
        return null;
      }
    });
    // 합계를 넣을 변수를 0으로 한다
    var total = 0;
    // 배열 수만 반복한다
    for(var i=0; i<price[0].length; i++){
      total = total + price[0][i];
    }
    // 합계를 표시한다
    alert("合計："+total);
  });
});