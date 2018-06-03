$(function(){
  // 애니메이션 시작 버튼에 click 이벤트를 할당한다
  $("#startAnime").click(function(){
    // 이미지에 애니메이션을 설정
    $("#photo1").animate({ width : 40 }, 1000)
          .animate({ height : 40 }, 1000)
          .animate({ opacity : 0.01 }, 1000)
          .animate({ opacity : 1.0 }, 1000)
          .animate({ height : 120 }, 1000)
          .animate({ width : 160 }, 1000)
          .queue(function(){
            $(this).css("border", "2px solid red");
            $(this).dequeue();
          })
          .queue(function(){
            $("#result").text("끝났습니다");
            $(this).dequeue();
          })
  });
});