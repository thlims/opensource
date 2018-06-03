// window 오브젝트에 resize 이벤트를 할당한다
$(window).resize(function(event){
  // 리사이즈시 밀리초 표시
  $("output:first").text("resize 이벤트 발생："+Date.now());
});