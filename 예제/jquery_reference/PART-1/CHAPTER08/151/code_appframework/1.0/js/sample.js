$(function(){
  // div 요소（이미지의 부모 요소）에 마우스 오버 이벤트를 할당한다
  $(".thumb").on("mouseover", function(){
    // 마우스 오버 상태를 알리기 위한 메시지 표시
    $("#result").html($("#result").html()+"div요소에서 mouseover 이벤트 발생<br>");
  });
  // div요소（이미지의 부모 요소）에 mouseout 이벤트를 할당한다
  $(".thumb").on("mouseout", function(){
    // 마우스 포인터가 떨어진 상태임을 알리기 위한 메시지 표시
    $("#result").html($("#result").html()+"div요소에서 mouseout 이벤트 발생<br>");
  });
  // 이미지에 mouseover 이벤트를 할당한다
  $("#photo1").on("mouseover", function(){
    // 마우스 오버 상태를 알리기 위한 메시지 표시
    $("#result").html($("#result").html()+"이미지에서 mouseover 이벤트 발생<br>");
  });
  // 마우스 오버 상태임을 알리기 위한 메시지 표시
  $("#photo1").on("mouseout", function(){
    // 마우스 포인터가 떨어진 상태임을 알리기 위한 메시지 표시
    $("#result").html($("#result").html()+"이미지에서 mouseout 이벤트 발생<br>");
  });
});