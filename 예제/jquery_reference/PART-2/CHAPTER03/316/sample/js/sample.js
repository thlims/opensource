$(function(){
  // 마우스 오버시의 처리. CSS 클래스를 추가한다
  $("div").mouseover(function(){
    // ef2 클래스 추가. 2초에 easeOutExpo 동작으로 처리
    $(this).addClass("ef2", 2*1000, "easeOutExpo");
  });
  // 마우스 아웃 시의 처리. CSS 클래스를 삭제한다
  $("div").mouseout(function(){
    // ef2 클래스 삭제. 2초에 easeOutExpo 동작으로 처리
    $(this).removeClass("ef2", 2*1000, "easeOutExpo");
  });
});