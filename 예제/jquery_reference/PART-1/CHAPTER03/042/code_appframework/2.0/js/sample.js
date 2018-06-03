$(function(){
  // 버튼에 click 이벤트를 할당한다
  $("#btn").click(function(){
    // value 속성 값이 Nexus가 아닌 요소를 대상으로 한다
    $("input[value!='Nexus']").each(function(){
      // 텍스트 필드만 대상으로 한다
      if($(this).attr("type") == "text"){
        // 배경색을 주황색으로 표시한다
        $(this).css("background", "orange");
      }
    });
  });
});