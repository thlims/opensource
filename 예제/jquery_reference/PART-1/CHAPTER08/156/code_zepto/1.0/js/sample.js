$(function(){
  // input 요소에 keydown 이벤트를 할당한다
  $("input").keydown(function(event){
    // 페이드시켜 이벤트가 발생했음을 알린다
    $("#kd").fadeTo(0, 1.0).fadeTo(2, 0);
  });
  // input 요소에 keypress 이벤트를 할당한다
  $("input").keypress(function(event){
    // 페이드시켜 이벤트가 발생했음을 알린다
    $("#kp").fadeTo(0, 1.0).fadeTo(2, 0);
  });
  // input 요소에 keyup 이벤트를 할당한다
  $("input").keyup(function(event){
    // 페이드시켜 이벤트가 발생했음을 알린다
    $("#ku").fadeTo(0, 1.0).fadeTo(2, 0);
  });
});