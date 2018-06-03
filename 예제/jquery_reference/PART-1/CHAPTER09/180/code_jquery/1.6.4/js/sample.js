$(function(){
  // 애니메이션 시작 버튼에 click 이벤트를 할당한다
  $("#startAnime").click(function(){
    // 왼쪽 이미지의 애니메이션 설정
    $("#photo1").animate({ width : 40 }, 1000)
          .animate({ height : 40 }, 1000)
          .animate({ opacity : 0.01 }, 1000)
          .animate({ opacity : 1.0 }, 1000)
          .animate({ height : 120 }, 1000)
          .animate({ width : 160 }, 1000)
  });
  // 큐 클리어 버튼에 클릭 이벤트를 할당한다
  $("#clearQ").click(function(){
    $("#photo1").clearQueue();
  });
});