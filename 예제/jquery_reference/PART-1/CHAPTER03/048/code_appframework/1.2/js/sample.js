$(function(){
  $("#btn").click(function(){
    // 결과를 표시하는 요소 제거한다
    $("#result").text("");
    // 체크를 끝낸 체크 박스를 지정한다
    $(":checked").each(function(){
      // 체크 박스의 항목 이름을 읽는다
      var itemName = $(this).attr("name");
      // 읽은 결과를 요소에 추가한다
      $("#result").append(itemName).append("<br>");
    });
  });
});