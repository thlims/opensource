$(function(){
  // input 요소에 keydown 이벤트를 할당한다
  $(document).on("keydown", "input", function(event){
    // 페이드시켜 이벤트가 발생했음을 알린다
    $("#kd").css("opacity", 1.0);
    setTimeout('$("#kd").css("opacity", 1.0)', 1000);
  });
  // input 요소에 keypress 이벤트를 할당한다
  $(document).on("keypress", "input", function(event){
    // 페이드시켜 이벤트가 발생했음을 알린다
    $("#kp").css("opacity", 1.0);
    setTimeout('$("#kp").css("opacity", 1.0)', 1000);
  });
  // input 요소에 keyup 이벤트를 할당한다
  $(document).on("keyup", "input", function(event){
    // 페이드시켜 이벤트가 발생했음을 알린다
    $("#ku").css("opacity", 1.0);
    setTimeout('$("#ku").css("opacity", 1.0)', 1000);
  });
});