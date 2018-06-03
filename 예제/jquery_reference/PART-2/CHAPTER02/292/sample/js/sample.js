$(function(){
  // 툴 팁을 설정한다
  $("#worldheritage a").tooltip({
    position: {
      my : "left center",
      at : "right center"
    }
  });
  // 순서대로 모든 툴 팁을 표시하기 위해 카운터 설정
  var counter = 3;
  // 처음에는 1초 후에, 그 다음은 3초 후에 툴 팁을 순서대로 표시한다
  setTimeout(function(){
    // 현재 표시되어 있는 툴 팁을 비표시로 한다
    $("#worldheritage a").eq(counter).tooltip("close");
    // 카운터를 늘린다. 단, 0〜3의 범위가 되도록 조정한다
    counter = (counter + 1) & 3;
    // 툴 팁을 표시한다
    $("#worldheritage a").eq(counter).tooltip("open");
    // 3초 후에 자기 자신(함수)을 호출한다
    setTimeout(arguments.callee, 3000);
  }, 1000);
});