$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $("#changeCSS").click(function(){
    // Nexus로 시작하는 텍스트 필드를 추출
    $("input[value^='Nexus']").each(function(){
      // 텍스트 필드만을 대상으로 한다
      if($(this).attr("type") == "text"){
        // 배경색을 주황색으로 표시한다
        $(this).css("background", "orange");
      }
    });
  });
  // 두 번째 버튼에 click 이벤트를 추춸
  $("#setAttr").click(function(){
    // attr을 사용하여 ID 이름의  kindle 값을 Nexus로 표시하기
    $("#kindle").attr("value", "Nexus");
  });
  // 세 번째 버튼에 click 이벤트를 할당
  $("#setProp").click(function(){
    // prop를 사용하여 ID 이름의 kindle 값을 Nexus로 표시한다
    $("#kindle").prop("value", "Nexus");
  });
});