$(function(){
  // 버튼에 click 이벤트를 할당한다
  $("#startAnime").click(function(){
    // 왼쪽 이미지 애니메이션 설정
    $("#photo1").animate({
      width : 40,
      height: 30,
      opacity : '-=0.25'
    });
  });
});