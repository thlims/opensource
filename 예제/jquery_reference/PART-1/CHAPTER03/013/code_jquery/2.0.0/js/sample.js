$(function(){
  // img 요소 중 class 속성을 가지면서 alt 속성이 dam인 요소에 빨간 테두리를 추가한다
  $("img[class][alt='dam']").css("border", "4px solid red");
});