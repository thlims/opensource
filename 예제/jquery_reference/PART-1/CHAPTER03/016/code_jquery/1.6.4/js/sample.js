$(function(){
  // 제목 요소에 마우스가 올려진/내려온 경우에 처리
  $(":header").hover(function(){
    // 마우스가 올려졌으면 배경색이 주황색으로 된다

    $(this).css("background-color", "orange");
  }, function(){
    // 마우스가 벗어났으면 배경색을 흰색으로 한다
    $(this).css("background-color", "white");
  });
});