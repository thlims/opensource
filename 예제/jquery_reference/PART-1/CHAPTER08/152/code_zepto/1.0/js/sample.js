$(function(){
  // div 요소（이미지의 부모 요소）에 mouseenter를 할당한다
  $(".thumb").mouseenter(function(){
    // div 요소 불투명도 설정
    $(this).fadeTo(50, 0.5);
    // 마우스가 요소에 있음을 알리는 메시지 표시
    $("#result").html($("#result").html()+"div요소에서 mouseenter이벤트 발생<br>");
  });
  // div 요소（이미지의 부모 요소）에 mouseleave 이벤트를 할당한다
  $(".thumb").mouseleave(function(){
    // div 요소 불투명도 설정
    $(this).fadeTo(50, 1.0);
    // 마우스 포인터가 벗어난 상태임을 알리는 메시지 표시
    $("#result").html($("#result").html()+"div 요소에서 mouseleave 이벤트 발생<br>");
  });
  // 이미지에 mouseenter 이벤트를 할당한다
  $("#photo1").mouseenter(function(){
    // 이미지 불투명도 설정
    $(this).fadeTo(50, 0.5);
    // 마우스가 요소에 있음을 알리는 메시지 표시
    $("#result").html($("#result").html()+"이미지에서 mouseenter 이벤트 발생<br>");
  });
  // 이미지에 mouseleave 이벤트를 할당한다
  $("#photo1").mouseleave(function(){
    // 이미지 불투명도 설정
    $(this).fadeTo(50, 1.0);
    // 마우스 포인터가 벗어난 상태임을 알리는 메시지 표시
    $("#result").html($("#result").html()+"이미지에서 mouseleave 이벤트 발생<br>");
  });
});