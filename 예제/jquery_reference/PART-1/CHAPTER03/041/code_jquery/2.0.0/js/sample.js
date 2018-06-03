$(function(){
  // 첫 번째 버튼에 click이벤트를 할당한다
  $("#changeCSS").click(function(){
    // 배경색을 주황색으로 한다
    $("input[value='Nexus']").css("background", "orange");
  });
  // 두 번째 버튼에 click 이벤트를 할당한다
  $("#setAttr").click(function(){
    // attr를 사용하여 ID 이름 kindle 값을 Nexus로 한다
    $("#kindle").attr("value", "Nexus");
  });
  // 세 번째 버튼에 click 이벤트를 할당한다
  $("#setProp").click(function(){
    // prop를 사용하여 ID 이름 kindle 값을 Nexus로 한다
    $("#kindle").prop("value", "Nexus");
  });
});