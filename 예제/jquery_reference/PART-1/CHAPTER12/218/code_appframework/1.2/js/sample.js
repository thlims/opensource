$(function(){
  // 버튼에 이벤트를 할당한다
  $("#btn").click(function(){
    // D이름 melon이 ID 이름 myList1의 노드인지 확인한다
    var flag1 = $.contains($("#myList1").get(0), $("#melon").get(0));
    // ID 이름 melon이 ID 이름 myList2의 노드인지 확인한다
    var flag2 = $.contains($("#myList2").get(0), $("#melon").get(0));
    // 결과를 표시한다
    $("#result").html(flag1+"<br>"+flag2);
  });
});