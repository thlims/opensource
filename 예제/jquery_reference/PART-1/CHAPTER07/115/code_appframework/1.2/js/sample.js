$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $("#checkClass").click(function(){
    //h1 요소에 caution 클래스가 있는지 확인한다
    alert($("h1").hasClass("caution"));
  });
  // 두 번째 버튼에 이벤트 할당
  $("#addClass").click(function(){
    // h1 요소에 caution 클래스 추가
    $("h1").addClass("caution");
  });
});