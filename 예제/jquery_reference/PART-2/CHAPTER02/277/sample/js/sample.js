$(function(){
  // 슬라이더를 설치한다
  $("#myslider").slider({
    // 슬라이더 스텝을 설정한다
    step : 20,
    // 핸들 드래그 중인 경우 슬라이더 값을 표시한다
    slide: function( event, ui ){
      // 슬라이더 값을 읽는다
      var val = ui.value;
      // 슬라이더 값을 표시한다
      $("#result").html(val+"개 주문");
    },
  });
});