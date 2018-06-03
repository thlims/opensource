$(function(){
  // 애니메이션 시작 버튼에 click 이벤트를 할당한다
  $("#startAnime").click(function(){
    // 이미지의 애니메이션 설정
    $("#photo1").animate({ width : 40 }, 1000)
          .queue(function(){
            $(this).css("border", "8px solid red");
            $(this).dequeue();
          })
          .delay(1000)
          .queue(function(){
            $(this).css("border", "8px solid blue");
            $(this).dequeue();
          })
  });
});